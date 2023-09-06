import { PrismaClient, DonationInfo } from '@prisma/client';
import OfferCard from './offerCard/OfferCard';

const prisma = new PrismaClient();

const fetchDonationInfo = async () => {
  // THIS HAS TO GO TO BACK END - SECURITY FLAW
  const donationInfo = await prisma.donationInfo.findMany({
    select: {
      id: true,
      description: true,
      available: true,
      location: true,
      about: true,
      createdAt: true,
    },
  });

  return donationInfo
};

export default async function Home() {
  const donationInfo = await fetchDonationInfo();

  return (
    <>
      <nav></nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <a href="/make-offer">go to form</a>

        <div className="">
          {donationInfo.map((donationOffer) => 
          <OfferCard donationOffer={donationOffer}/>
          )}
        </div>
      </main>
    </>
  );
}

