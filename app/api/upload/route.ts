import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authHandler } from '../auth/[...nextauth]/route';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(
  String(process.env.DATABASE_URL),
  String(process.env.ANON_LEY)
);

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  const fileBuffer = await req.blob();

  console.log(fileBuffer);

  const fileName = uuidv4();

  const { data, error } = await supabase.storage
    .from('user-images')
    .upload(fileName, fileBuffer);

  if (error) {
    console.error('Supabase storage upload error:', error.message);
  }
}

// const session = await getServerSession(authHandler);
// if (session?.user?.email) {
//   await prisma.userInfo.update({
//     where: {
//       personalEmail: session?.user?.email,
//     },
//     data: {

//     },
//   });
//   return new Response('Posted file to data bucket');
// }