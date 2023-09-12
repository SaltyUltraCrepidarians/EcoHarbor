'use client';
import './Navbar.css';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/logo-no-background.png';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();

  const checkIfNewUser = async () => {
    // const newUser = await fetch DB (session.email)
    // if (true newuser) -> changeState -> popup form
    // else (false newuser) -> do nothing
    const res = await fetch(`/api/user/${session?.user?.email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(session?.user?.email),
    });
    console.log('Check if new user called ');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  };

  useEffect(() => {
    if (status !== 'authenticated') return;
    // if (not logedin) return
    // checkIfNewUser()
    checkIfNewUser();
  }, [session]);

  return (
    <nav className="navbar">
      <Link href="/" className="">
        <Image alt="Logo" src={logo} width={80} height={80} />
      </Link>
    </nav>
  );
}
