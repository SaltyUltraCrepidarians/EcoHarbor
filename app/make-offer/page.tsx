'use client';
import React, { useState } from 'react';
import './make-offer.css';
import { defaultFormValues } from './utils/defaultFormValues';

const MakeOffer = () => {
  const [offerInfo, setOfferInfo] = useState(defaultFormValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setOfferInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/seed', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(offerInfo),
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.text;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="make-offer-form">
        <label>Description</label>
        <input
          type="text"
          placeholder="what are you offering?"
          name="description"
          onChange={handleChange}
          value={offerInfo.description}
        />

        <label>Rating</label>
        <input
          type="text"
          name="rating"
          onChange={handleChange}
          value={offerInfo.rating}
        />
        

        <button>Submit</button>
      </form>
    </>
  );
};

export default MakeOffer;
