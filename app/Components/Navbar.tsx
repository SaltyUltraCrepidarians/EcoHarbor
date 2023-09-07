'use client';
import './Navbar.css';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo-no-background.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="">
        <Image alt="Logo" src={logo} width={80} height={80} />
      </Link>
    </nav>
  );
}
