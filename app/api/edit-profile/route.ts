import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authHandler } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function UPDATE(req: NextRequest, res: NextResponse) {
  const updatedUserProfile = JSON.parse(await req.text());
  console.log(updatedUserProfile)

  const session = await getServerSession(authHandler);

  if (session?.user?.email) {
    await prisma.userInfo.update({
      where: {
        personalEmail: session.user.email,
      },
      data: {
        personalName: updatedUserProfile.personalName,
        businessName: updatedUserProfile.businessName,
        businessEmail: updatedUserProfile.businessEmail,
        businessPhoneNr: updatedUserProfile.businessPhoneNr,
        businessAdress: updatedUserProfile.businessAdress,
      },
    });
  }
  return new Response('Updated User Information');
}
