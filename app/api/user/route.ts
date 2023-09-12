import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth/next"
import { authHandler } from '../auth/[...nextauth]/route';


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
      profile_completed: false
    },
  });
  return new Response('Posted to userInfo');
}

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authHandler)
  console.log(JSON.stringify(session))
  
  if(session?.user != null && session?.user.email != null ) {
  const databaseUser = await prisma.userInfo.findUnique({
    where: {
      personalEmail: session?.user?.email,
    }
  });
  console.log(databaseUser);
  return new Response(JSON.stringify(databaseUser));
  }
  throw new Error("Could not find user from session")
}
