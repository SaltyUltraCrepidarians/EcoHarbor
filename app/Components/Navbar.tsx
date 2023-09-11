'use client';
import './Navbar.css';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo-no-background.png';
import { useSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchUserOnLogin = async (userSessionEmail: any) => {
  const userEntryInDb = await prisma.userInfo.findUnique({});;

  return userEntryInDb;
};

export default function Navbar() {
  const { data: session, status } = useSession();
  const userGoogleData = {
    personalName: session?.user?.name,
    personalEmail: session?.user?.email,
    perosnalImage: session?.user?.image,
  };

  const handleLogin = () => {};

  return (
    <nav className="navbar">
      <Link href="/" className="">
        <Image alt="Logo" src={logo} width={80} height={80} />
      </Link>

      <button
        onClick={() => {
          console.log(session);
        }}
      >
        TEST ADD USER
      </button>
    </nav>
  );
}
