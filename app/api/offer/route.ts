import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

// POST ONE OFFER CARD
export async function POST(req: NextRequest, res: NextResponse) {
  const offerInfo = await req.text()
  const offerInfoData = await JSON.parse(offerInfo);

  await prisma.donationInfo.create({
    data: {
      description: offerInfoData.description,
      available: offerInfoData.available,
      location: offerInfoData.location,
      about: offerInfoData.about,
    },
  });
  return new Response('whatever');
}

// GET ONE OFFER CARD
