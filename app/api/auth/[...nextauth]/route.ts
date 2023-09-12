import NextAuth from 'next-auth';
import type { NextAuthOptions, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dotenv from 'dotenv';
import { log } from 'console';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
dotenv.config();

const id = String(process.env.CLIENT_ID);
const secret = String(process.env.CLIENT_SECRET);

const authHandler: NextAuthOptions = NextAuth({
  providers: [
    GoogleProvider({
      clientId: id,
      clientSecret: secret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, email }) {
      console.log('Happy user: ', JSON.stringify(user));
      console.log('happy account', JSON.stringify(account));
      console.log('happy email: ', JSON.stringify(email));

      handleLogin(user);
      return true;
    },
  },
});

const handleLogin = async (loginUser: User) => {
  if (loginUser.email) {
    const databaseUser = await prisma.userInfo.findUnique({
      where: {
        personalEmail: loginUser.email,
      },
      select: {
        id: true,
        personalEmail: true,
      },
    });
    if (!databaseUser) {
      const newUser = await prisma.userInfo.create({
        data: {
          personalEmail: loginUser.email,
          personalName: loginUser.name || '',
          personalImage: loginUser.image || '',
          businessName: '',
          businessEmail: '',
          businessPhoneNr: '',
          businessImage: '',
          businessAdress: '',
          rating: 0,
        },
      });
      return newUser;
    }
  }
};

export { authHandler as GET, authHandler as POST };
