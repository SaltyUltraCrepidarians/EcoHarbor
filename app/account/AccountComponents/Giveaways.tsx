import { OfferCard } from '@/app/types';
import React from 'react';

type Props = {
  donationData: OfferCard[]
}

export default function Giveaways({donationData}: Props) {
  return <>
  {donationData.map(donation => {
    <div>DONATION</div>
  })}
  </>;
}
