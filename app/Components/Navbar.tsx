'use client';
import './Navbar.css'
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo-no-background.png';
import { signIn, signOut } from 'next-auth/react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="">
        <Image alt="Logo" src={logo} width={80} height={80} />
      </Link>

      {/* <div className="">
        <Link href="/make-offer">Go to form</Link>
      </div> */}

      {/* <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Logout</button> */}
    </nav>
  );
}
