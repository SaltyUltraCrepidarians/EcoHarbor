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
  }

  useEffect(() => {
    // if (not logedin) return

    // checkIfNewUser()
  }, [])

  return (
    <nav className="navbar">
      <Link href="/" className="">
        <Image alt="Logo" src={logo} width={80} height={80} />
      </Link>
    </nav>
  );
}
