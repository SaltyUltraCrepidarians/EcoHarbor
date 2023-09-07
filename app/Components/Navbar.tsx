'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/eco-harbor-circle.png';
import { signIn, signOut } from 'next-auth/react';
export default function Navbar() {
  return (
    <nav className=" bg-orange-400 h-20 justify-between items-center flex">
      <Link href="/" className="flex text-gray-700 items-center">
        <Image alt="Logo" src={logo} width={80} height={80} />
      </Link>

      <div className="flex text-gray-700 items-center m-auto mb-5">
        <Link href="/make-offer">Go to form</Link>
      </div>

      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Logout</button>
    </nav>
  );
}
