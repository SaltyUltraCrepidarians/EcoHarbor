import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const userData = await req.text();
  const userInfoData = await JSON.parse(userData);

  await prisma.userInfo.create({
    data: {
      personalName: userInfoData.personalName,
      personalEmail: userInfoData.personalEmail,
      personalImage: userInfoData.personalImage,
      businessName: userInfoData.businessName,
      businessEmail: userInfoData.businessEmail,
      businessPhoneNr: userInfoData.businessPhoneNr,
      businessImage: userInfoData.businessImage,
      businessAdress: userInfoData.businessAdress,
      rating: userInfoData.rating,
    },
  });
  return new Response('Posted to userInfo');
}

export async function GET(req: NextRequest, res: NextResponse) {
  const sessionEmail = await req.text();
  const email = await JSON.parse(sessionEmail);

  const databaseUser = await prisma.userInfo.findUnique({
    where: {
      personalEmail: email,
    },
    select: {
      id: true,
      personalEmail: true,
    },
  });

  console.log(databaseUser);

  return new Response('Posted to userInfo');
}
