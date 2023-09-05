import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { companyName, description } = req.body;

      // Validate the data if needed

      const donationInfo = await prisma.donationInfo.create({
        data: {
          companyName,
          description,
        },
      });

      res.status(201).json({ message: 'Donation information created successfully', donationInfo });
    } catch (error) {
      res.status(500).json({ error: 'Error creating donation information' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

