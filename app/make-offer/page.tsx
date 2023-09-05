import React, { useState } from 'react';
import './make-offer.css';

const MakeOffer = () => {
  const [offerInfo, setOfferInfo] = useState({
    companyName: '',
    description: '',
  });

  return (
    <>
      <form className="make-offer-form">
        <label htmlFor="">Enter the name of your company</label>

        <input type="text" placeholder="Company name..." />

        <label htmlFor="">Description</label>

        <textarea name="" id="" cols={30} rows={10}></textarea>

        <button>Submit</button>
      </form>
    </>
  );
};

export default MakeOffer;
