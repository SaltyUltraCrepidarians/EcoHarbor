'use client';
import React, { useState } from 'react';
import './Registration.css';
import { defaultRegistrationValues } from '@/app/account/AccountComponents/makeOfferDefaultValues';

export default function Registration() {
  const [registrationInfo, setRegistrationInfo] = useState(
    defaultRegistrationValues
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Registration info', registrationInfo);
    
    try {
      const res = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationInfo),
      });

      setRegistrationInfo(defaultRegistrationValues);
      return res.text;
      
    } catch (err) {
      console.error('Failed to fetch data', err);
    }
  };

  return (
    <section className="make-offer-wrapper">
      <form className="make-offer-form" onSubmit={handleSubmit}>
        <p className="title"> Register</p>

        <div className="label-input-wrap">
          <label>Business Name</label>
          <input
            type="text"
            name="businessName"
            onChange={handleChange}
            value={registrationInfo.businessName}
            required
          />
        </div>

        <div className="label-input-wrap">
          <label>Contact Email</label>
          <input
            type="text"
            name="businessEmail"
            onChange={handleChange}
            value={registrationInfo.businessEmail}
            required
          />
        </div>

        <div className="label-input-wrap">
          <label>Contact Number</label>
          <input
            type="text"
            name="businessPhoneNr"
            onChange={handleChange}
            value={registrationInfo.businessPhoneNr}
            required
          />
        </div>

        <div className="label-input-wrap">
          {/* should be an upload */}
          <label> Business Image</label>
          <input
            type="text"
            name="businessImage"
            onChange={handleChange}
            value={registrationInfo.businessImage}
          />
        </div>

        <div className="label-input-wrap">
          <label>Business Adress</label>
          <input
            type="text"
            name="businessAdress"
            onChange={handleChange}
            value={registrationInfo.businessAdress}
            required
          />
        </div>
        <button className="account-button">Submit</button>
      </form>
    </section>
  );
}
