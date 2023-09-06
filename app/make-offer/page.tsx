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

    console.log('Submitted!');
    setOfferInfo(defaultFormValues);

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
          required
        />

        <label>Available</label>
        <input
          type="text"
          name="available"
          onChange={handleChange}
          value={offerInfo.available}
          required
        />

        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={offerInfo.location}
          required
        />
        <label>About</label>
        <textarea
          name="about"
          cols={30}
          rows={10}
          onChange={handleChange}
          value={offerInfo.about}
          required
        ></textarea>

        <button>Submit</button>
      </form>
      <a href="/">Go to offers</a>
    </>
  );
};

export default MakeOffer;
