import { DonationInfo } from '@prisma/client'
import React from 'react'
import { OfferCard} from '../types'
import { abort } from 'process';

type Props = {
    donationOffer: OfferCard
  };

export default function OfferCard({donationOffer}:Props) {
  return (
    <section>
        <p>{donationOffer.description}</p>
        <p>{donationOffer.available}</p>
        <p>{donationOffer.location}</p>
        <p>{donationOffer.about}</p>
        <p>{donationOffer.createdAt}</p> 
    </section>
  )
}
