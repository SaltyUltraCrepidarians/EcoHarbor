import React from 'react';
import { OfferCardType } from '../types';
import './OfferCard.css';

type Props = {
  donationOffer: OfferCardType;
  isAdmin: boolean
};

export default function OfferCard({ donationOffer, isAdmin }: Props) {
 
  const handleDelete = async () => {
    const res = await fetch('/api/offer', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationOffer.id),
    });
  };


  return (
    <section className="offer-card-section">
      { isAdmin && <button>Delete</button>}
      <p>Description: {donationOffer.description}</p>
      <p>Available: {donationOffer.available}</p>
      <p>Location: {donationOffer.location}</p>
      <p>About: {donationOffer.about}</p>
      <p>Created at: {String(donationOffer.createdAt)}</p>
    </section>
  );
}
