import Button from '@/app/Components/Button';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import './Profile.css';
import { User } from '@/app/types';

type Props = {
  userData: User;
};

export default function Profile({ userData }: Props) {
  return (
    <section className="profile-wrapper">
      <img src={userData.personalImage} alt="profile-image" />
      <h3>Welcome, {userData.personalName.split(' ')[0]}!</h3>

      <p>PERSONAL INFO: </p>
      <p>Personal name: {userData.personalName}</p>
      <p>Personal email: {userData.personalEmail}</p>
      <p>BUSINESS INFO (Shown):</p>
      <img src={userData.businessImage} alt="business-image" />
      <p> Business Name: {userData.businessName}</p>
      <p>Phone number: {userData.businessPhoneNr}</p>
      <p>Adress: {userData.businessAdress}</p>
      <p>Your Rating: {userData.rating}</p>

      <Button
        action={() => signOut({ callbackUrl: '/' })}
        className="account-button"
        text="Sign Out"
      />
      <Button
        action={() => alert('Edit Selected')}
        className="account-button"
        text="Edit"
      />
      <Button
        action={() => alert('Delete Selected')}
        className="account-button"
        text="Delete"
      />
    </section>
  );
}
