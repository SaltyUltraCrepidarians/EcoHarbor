// 'use client';

// import './Components/landingPage.css';
// import LandingPage from './Components/LandingPage';
// import Footer from './Components/Footer';

// export default function Home() {
//   return (
//     <>
//       <LandingPage />
//       <Footer />
//     </>
//   );
// }

import { PrismaClient } from '@prisma/client';
import './Components/landingPage.css';
import OfferCard from './offerCard/OfferCard';
import Footer from './Components/Footer';

const prisma = new PrismaClient();

const fetchDonationInfo = async () => {
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
      <main className="offer-cards-main">
        <div className="">
          {donationInfo.map((donationOffer) => (
            <OfferCard donationOffer={donationOffer} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
