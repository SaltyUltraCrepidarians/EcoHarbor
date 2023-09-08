import Button from '@/app/Components/Button';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import './Profile.css';

export default function Profile() {
  const {data: session, status} = useSession()

  return (
    <section className="profile-wrapper">
      <img src="" alt="profile-image" />
      <h3>WELCOME username</h3>

      <p>Name:</p>
      <p>Email: {session?.user?.email}</p>
      <p>Phone number:</p>
      <p>Adress:</p>

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
