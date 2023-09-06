import { DonationInfo } from '@prisma/client'
import React from 'react'
import { OfferCard} from '../types'
import { abort } from 'process';
import './OfferCard.css';

type Props = {
    donationOffer: OfferCard
  };

export default function OfferCard({donationOffer}:Props) {
  return (
    <section className="offer-card-section">
      <p>Description: {donationOffer.description}</p>
      <p>Available: {donationOffer.available}</p>
      <p>Location: {donationOffer.location}</p>
      <p>About: {donationOffer.about}</p>
      <p>Created at: {String(donationOffer.createdAt)}</p>
    </section>
  );
}
