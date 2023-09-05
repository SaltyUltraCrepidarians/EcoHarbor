import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  
  console.log()

  // await prisma.donationInfo.create({
  //   data: {
  //     companyName: data.companyName,
  //     description: data.description,
  //   },
  // });

  return new Response();
}
