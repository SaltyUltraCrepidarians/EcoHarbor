'use client';
import React, { useState } from 'react';
import { OfferCardType } from '../types';
import './OfferCard.css';
import EditOfferCard from './EditOfferCard';

type Props = {
  donationOffer: OfferCardType;
  isAdmin: boolean;
};

export default function OfferCard({ donationOffer, isAdmin }: Props) {
  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  if (editMode)
    return (
      <>
        <EditOfferCard handleEdit={handleEdit} donationOffer={donationOffer} />
      </>
    );

  if (!editMode)
    return (
      <section className="offer-card-section">
        {isAdmin && <button onClick={handleEdit}>Edit</button>}
        <img
          className="business-image"
          src={donationOffer.cardBusinessImage}
          alt="do-better-next-time"
        />
        <p>Description: {donationOffer.description}</p>
        <p>Available: {donationOffer.available}</p>
        <p>Location: {donationOffer.location}</p>
        <p>About: {donationOffer.about}</p>
        <p>Created at: {String(donationOffer.createdAt)}</p>
      </section>
    );
}
