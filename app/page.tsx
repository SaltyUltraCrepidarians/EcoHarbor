import { PrismaClient } from '@prisma/client';
import './Components/landingPage.css';
import OfferCard from './offerCard/OfferCard';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

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
      <Navbar />
      <main className="offer-cards-main">
        <div className="">
          {donationInfo.map((donationOffer) => (
            <OfferCard donationOffer={donationOffer} isAdmin={false} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
