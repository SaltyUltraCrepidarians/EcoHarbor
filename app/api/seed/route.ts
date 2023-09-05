import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Data = {
  companyName: string;
  description: string;
};

export async function GET(req: Request) {
  await prisma.donationInfo.create({
    data: {
      companyName: 'Joe and the Juicy Juice',
      description:
        'Shitty sandwiches for a nice price. But the tuna and avocado is quite good',
    },
  });
}
