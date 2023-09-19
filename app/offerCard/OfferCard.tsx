'use client';
import React, { useState } from 'react';
import { OfferCardType } from '../types';
import './OfferCard.css';
import EditOfferCard from './EditOfferCard';
import Button from '../Components/Button';

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

  const handleDelete = async () => {
    const res = await fetch('/api/offer', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationOffer.id),
    });
    return res.text;
  };

  // const handleEdit = async () => {
  //   const res = await fetch('/api/offer', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(donationOffer),
  //   });
  //   return res.text;
  // };

  if (!editMode)
    return (
      <section className="offer-card-section">
        {isAdmin && <button onClick={handleDelete}>Delete</button>}
        {isAdmin && <button onClick={handleEdit}>Edit</button>}

        <p>Description: {donationOffer.description}</p>
        <p>Available: {donationOffer.available}</p>
        <p>Location: {donationOffer.location}</p>
        <p>About: {donationOffer.about}</p>
        <p>Created at: {String(donationOffer.createdAt)}</p>
      </section>
    );
}
