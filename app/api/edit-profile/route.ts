import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authHandler } from '../auth/[...nextauth]/route';
import { log } from 'console';

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest, res: NextResponse) {
  const updatedUserProfile = await req.text();
  const updatedUserProfileData = JSON.parse(updatedUserProfile);
  console.log('this is updarted prof data: ', updatedUserProfileData);

  console.log(updatedUserProfile);

  const session = await getServerSession(authHandler);

  if (session?.user?.email) {
    await prisma.userInfo.update({
      where: {
        personalEmail: session.user.email,
      },
      data: {
        personalName: updatedUserProfileData.personalName,
        businessName: updatedUserProfileData.businessName,
        businessEmail: updatedUserProfileData.businessEmail,
        businessPhoneNr: updatedUserProfileData.businessPhoneNr,
        businessAdress: updatedUserProfileData.businessAdress,
      },
    });
  }
  return new Response('Updated User Information');
}
