'use client';
import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import './account.css';
import Profile from './Profile';
import AccountForm from './AccountForm';
import Giveaways from './Giveaways';
import { User } from '@/app/types';

type Props = {
  userData: User;
};

export default function page({ userData }: Props) {
  const [selection, setSelection] = useState('profile');

  const profile = 'profile';
  const form = 'form';
  const giveaways = 'giveAways';

  const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelection(e.currentTarget.name);
  };

  console.log('this is happy userData', userData);

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
      {selection === profile && <Profile userData={userData} />}
      {selection === form && <AccountForm />}
      {selection === giveaways && <Giveaways />}
      <Footer />
    </>
  );
}