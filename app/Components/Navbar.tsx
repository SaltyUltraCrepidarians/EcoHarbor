'use client';
import './Navbar.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/logo-no-background.png';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState('No data yet');

  const checkIfNewUser = async () => {
    const res = await fetch(`/api/user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const response = await res.text();

    return response;
  };

  useEffect(() => {
    if (status !== 'authenticated') return;

    (async () => {
      const newUser = await checkIfNewUser();
      setUserData(newUser);
      console.log('HERE IS THE HAPPY NEW USER', newUser);
    })();
  }, [session]);
  console.log('HERE IS THE HAPPY USER DATA', userData);

  return (
    <nav className="navbar">
      <Link href="/" className="">
        <Image alt="Logo" src={logo} width={80} height={80} />
      </Link>
    </nav>
  );
}
