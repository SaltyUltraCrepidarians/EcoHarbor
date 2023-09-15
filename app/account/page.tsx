import React from 'react';
import AccountPage from './AccountComponents/AccountPage';
import { getServerSession } from 'next-auth';
import { authHandler } from '../api/auth/[...nextauth]/route';
import { PrismaClient } from '@prisma/client';
import { User } from '../types';

const prisma = new PrismaClient();

const fetchData = async () => {
  const session = await getServerSession(authHandler);

  if (session?.user !== null && session?.user?.email !== null) {
    const databaseUser = await prisma.userInfo.findUnique({
      where: {
        personalEmail: session?.user?.email,
      },
    });

    return databaseUser as User;
  }

  if (!session) throw new Error();
};

export default async function page() {
  const userData = await fetchData();

  if (userData) {
    return (
      <>
        <AccountPage userData={userData} />
      </>
    );
  }
}
