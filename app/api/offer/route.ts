import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// POST ONE OFFER CARD
export async function POST(req: NextRequest, res: NextResponse) {
  const offerInfo = await req.text()
  const offerInfoData = await JSON.parse(offerInfo);

  // USE getServerSession.email to find user in DB
  // retrieve user ID

  await prisma.donationInfo.create({
    data: {

      // userInfo: {
      //   connect: {
      //     id: userId,
      //   },
      // },

      userInfoId: offerInfoData.userInfoId,
      description: offerInfoData.description,
      available: offerInfoData.available,
      location: offerInfoData.location,
      about: offerInfoData.about,
    },
  });
  return new Response('Posted to donationInfo');
}


