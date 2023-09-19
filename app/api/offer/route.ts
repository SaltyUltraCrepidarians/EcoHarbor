import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authHandler } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

// POST ONE OFFER CARD
export async function POST(req: NextRequest, res: NextResponse) {
  const offerInfo = await req.text();
  const offerInfoData = await JSON.parse(offerInfo);

  // USE getServerSession.email to find user in DB
  // retrieve user ID

  const session = await getServerSession(authHandler);

  if (session?.user?.email) {
    const databaseUser = await prisma.userInfo.findUnique({
      where: {
        personalEmail: session?.user?.email,
      },
    });
    await prisma.donationInfo.create({
      data: {
        userInfo: {
          connect: {
            id: databaseUser?.id,
          },
        },

        userInfoId: offerInfoData.userInfoId,
        description: offerInfoData.description,
        available: offerInfoData.available,
        location: offerInfoData.location,
        about: offerInfoData.about,
      },
    });
  }
  return new Response('Posted to donationInfo');
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  // const { id } = await req.text();
  try {
    const offerInfo = await req.text();
    const offerInfoData = await JSON.parse(offerInfo);

    // USE getServerSession.email to find user in DB
    // retrieve user ID

    const session = await getServerSession(authHandler);

    if (session?.user?.email) {
      const databaseUser = await prisma.userInfo.findUnique({
        where: {
          personalEmail: session?.user?.email,
        },
      });

      if (!databaseUser) {
        return new Response('Giveaway not found', { status: 404 });
      }

      await prisma.donationInfo.delete({
        where: {
          id: offerInfoData,
        },
      });
    }
    return new Response('OfferCard deleted');
  } catch (error) {
    console.error('An error occurred while deleting the giveaway', error);
    return new Response('Error deleting the giveaway', { status: 500 });
  }
}