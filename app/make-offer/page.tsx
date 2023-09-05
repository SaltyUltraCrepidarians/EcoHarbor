'use client'
import React, { useState } from 'react';
import './make-offer.css';

const MakeOffer = () => {
  const [offerInfo, setOfferInfo] = useState({
    companyName: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOfferInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Offer Info for JOE', offerInfo)
  }

  return (
    <>
      <form  onSubmit={handleSubmit} className="make-offer-form">
        <label>Enter the name of your company</label>
        <input type="text" placeholder="Company name..."
        name="companyName" onChange={handleChange} value={offerInfo.companyName}
        />

        <label>Description</label>
        <textarea
        name="description" onChange={handleChange} value={offerInfo.description}
        cols={30} rows={10}
        ></textarea>

        <button>Submit</button>
      </form>
    </>
  );
};

export default MakeOffer;
