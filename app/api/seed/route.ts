import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { log } from 'console';
import { off } from 'process';

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { offerInfo } = req.body;
  // console.log(offerInfo);

  const offerInfoData = await JSON.parse(offerInfo);
  console.log('offerInfo prsed', offerInfoData);

  await prisma.donationInfo.create({
    data: {
      companyName: offerInfoData.companyName,
      description: offerInfoData.description,
    },
  });
  return new Response('whatever');
}


