import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authHandler } from '../auth/[...nextauth]/route';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(
  String(process.env.PROJECT_URL), // could be the PROJECT_URL or DATABASE_URL
  String(process.env.ANON_KEY), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    }
  }
);

async function uploadFile(file: Blob) {
  const uuidFileName = uuidv4() + '.jpg';
  
  const { data, error } = await supabase.storage
  .from('user-images')
  .upload(uuidFileName, file);

  if (error) {
    console.error(error);

  } else {
    console.log('Image Uploaded - confirm it on supabase', data);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const fileBuffer = await req.blob();
  
  console.log('\nFILE BUFFER ----> ', fileBuffer);

  await uploadFile(fileBuffer);
}








// const prisma = new PrismaClient();
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


