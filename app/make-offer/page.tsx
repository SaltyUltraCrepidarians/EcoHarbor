'use client';
import React, { useState } from 'react';
import './make-offer.css';

const MakeOffer = () => {
  const [offerInfo, setOfferInfo] = useState({
    companyName: '',
    description: '',
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
    console.log(offerInfo)
    try {
      const response = await fetch('api/seed', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(offerInfo),
      });

      if (response.status === 201) {
        const data = await response.json();
        console.log(data.message);
        // You can reset the form or show a success message here
      } else {
        console.error('Error creating donation information');
        // Handle error cases
      }
    } catch (error) {
      console.error('Form Submission Error:', error);
    }
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
