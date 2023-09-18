import OfferCard from '@/app/offerCard/OfferCard';
import { OfferCardType } from '@/app/types';
import React from 'react';

type Props = {
  donationData: OfferCardType[];
};

export default function Giveaways({ donationData }: Props) {
  return (
    <>
      {donationData.map((donation) => {
        return <OfferCard donationOffer={donation} isAdmin={true} />;
      })}
    </>
  );
}
