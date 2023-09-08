import Button from '@/app/Components/Button';
import { signOut } from 'next-auth/react';
import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <section className="profile-wrapper">
      <img src="" alt="profile-image" />
      <h3>WELCOME username</h3>

      <p>Name:</p>
      <p>Email:</p>
      <p>Phone number:</p>
      <p>Adress:</p>

      <Button
        action={() => signOut({ callbackUrl: '/' })}
        className="account-button"
        text="Sign Out"
      />
    </section>
  );
}
