import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextApiRequest, res: NextApiResponse) {

      const { companyName, description } = req.body;
      console.log(companyName,description)

       await prisma.donationInfo.create({
        data: {
          companyName: companyName,
          description : description,
        },
      });
      return new Response ('whatever')
  }


