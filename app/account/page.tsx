'use client';
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import './account.css';
import Profile from './AccountComponents/Profile';
import AccountForm from './AccountComponents/AccountForm';
import Giveaways from './AccountComponents/Giveaways';

export default function page() {
  const [selection, setSelection] = useState('profile');

  const profile = 'profile';
  const form = 'form';
  const giveaways = 'giveAways';

  const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelection(e.currentTarget.name);
    console.log('this is the selection', e.currentTarget.name);
  };
  return (
    <>
      <div className="account-buttons-wrapper">
        <button
          className="account-button"
          onClick={handleSelection}
          name={profile}
        >
          Profile
        </button>
        <button
          className="account-button"
          onClick={handleSelection}
          name={form}
        >
          Form
        </button>
        <button
          className="account-button"
          onClick={handleSelection}
          name={giveaways}
        >
          Giveaways
        </button>
      </div>
      {selection === profile && <Profile />}
      {selection === form && <AccountForm />}
      {selection === giveaways && <Giveaways />}
      <Footer />
    </>
  );
}
