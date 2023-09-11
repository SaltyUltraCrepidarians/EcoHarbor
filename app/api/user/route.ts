import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();


export async function POST(req: NextRequest, res: NextResponse) {
  const userData = await req.text()
  const userInfoData = await JSON.parse(userData);

  await prisma. create({
    data: {
      description: userInfoData.description,
      available: userInfoData.available,
      location: userInfoData.location,
      about: userInfoData.about,
    },
  });
  return new Response('whatever');
}


