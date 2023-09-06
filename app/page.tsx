import { PrismaClient } from '@prisma/client';
import OfferCard from './offerCard/OfferCard';
import './landingPage.css'

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

  return donationInfo;
};

export default async function Home() {
  const donationInfo = await fetchDonationInfo();

  return (
    <>
      <main className='offer-cards-main'>
        <div className="">
          {donationInfo.map((donationOffer) => (
            <OfferCard donationOffer={donationOffer} />
          ))}
        </div>
      </main>
    </>
  );
}
