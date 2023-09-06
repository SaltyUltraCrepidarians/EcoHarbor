'use client';
import React, { useState } from 'react';
import './make-offer.css';

const MakeOffer = () => {
  const [offerInfo, setOfferInfo] = useState({
    companyName: '',
    description: ''
  });

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
        <label>Enter the name of your company</label>
        <input
          type="text"
          placeholder="Company name..."
          name="companyName"
          onChange={handleChange}
          value={offerInfo.companyName}
        />

        <label>Description</label>
        <textarea
          name="description"
          onChange={handleChange}
          value={offerInfo.description}
          cols={30}
          rows={10}
        ></textarea>

        <button>Submit</button>
      </form>
    </>
  );
};

export default MakeOffer;
