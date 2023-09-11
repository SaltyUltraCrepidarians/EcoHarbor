import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import dotenv from 'dotenv';

dotenv.config();

const id = String(process.env.CLIENT_ID);
const secret = String(process.env.CLIENT_SECRET);

const authHandler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: id,
      clientSecret: secret,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { authHandler as GET, authHandler as POST };
