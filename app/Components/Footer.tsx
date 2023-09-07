'use client';
import { signIn, useSession } from 'next-auth/react';
import React from 'react';
import Button from './Button';
import './Footer.css';

export default function Footer() {
  const { data: Session, status } = useSession();

  if (status === 'authenticated') {
    return(
    <footer className="footer">
      <Button
          className="footer-button-loggedIn"
          action={() => console.log('Account Clicked')}
          text={'Account'}
        />
          <Button
          className="footer-button-loggedIn"
          action={() => console.log("What's available")}
          text={"What's available"}
        />

    </footer>
    )

  } else {
    return (
      <footer className="footer">
        <Button
          className="footer-button"
          action={signIn}
          text={'Join & Share'}
        />
      </footer>
    );
  }
}
