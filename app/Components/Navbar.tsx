'use client';
import './Navbar.css';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo-no-background.png';
import { useSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// THIS FUNCTION SHOULD BE PART OF OUR
// API/USER END POINT AND HERE WE NEED TO MAKE A FETCH
const fetchUserOnLogin = async (userSessionEmail: any) => {
  const userEntryInDb = await prisma.userInfo.findUnique({
    where: {
      personalEmail: userSessionEmail
    },
    select: {
      personalEmail: true
    }
  });
  return userEntryInDb;
};

export default function Navbar() {
  const { data: session, status } = useSession();
  const userGoogleData = {
    personalName: session?.user?.name,
    personalEmail: session?.user?.email,
    perosnalImage: session?.user?.image,
  };

  const handleLogin = () => {
    fetchUserOnLogin(session?.user?.email)
  };

  return (
    <nav className="navbar">
      <Link href="/" className="">
        <Image alt="Logo" src={logo} width={80} height={80} />
      </Link>

      <button
        onClick={handleLogin}
      >
        TEST ADD USER
      </button>
    </nav>
  );
}
