import React from 'react';
import './Registration.css';

export default function Registration() {
  return (
    <section className="make-offer-wrapper">
      <form className="make-offer-form">
        <p className="title"> Register</p>

        <div className="label-input-wrap">
          <label>Business Name</label>
          <input type="text" name="" id="" required />
        </div>

        <div className="label-input-wrap">
          <label>Contact Email</label>
          <input type="text" name="" id="" required />
        </div>

        <div className="label-input-wrap">
          <label>Contact Number</label>
          <input type="text" required />
        </div>

        <div className="label-input-wrap">
          {/* should be an upload */}
          <label> Business Image</label>
          <input type="text" name="" id="" />
        </div>

        <div className="label-input-wrap">
          <label>Business Adress</label>
          <input type="text" name="" id="" required />
        </div>
        <button className="account-button">Submit</button>
      </form>
    </section>
  );
}
