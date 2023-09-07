'use client';
import { signIn } from 'next-auth/react';
import React from 'react';
import Button from './Button';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* <button onClick={() => signIn()}>Join & Share</button> */}
      <Button
        className="footer-button"
        action={() => signIn()}
        text={'Join & Share'}
      />
    </footer>
  );
}
