import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authHandler } from '../auth/[...nextauth]/route';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(
  String(process.env.PROJECT_URL), // could be the PROJECT_URL or DATABASE_URL
  String(process.env.ANON_KEY),
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  }
);

const prisma = new PrismaClient();

const getUserId = async () => {
  const session = await getServerSession(authHandler);
  if (session?.user?.email) {
    const user = await prisma.userInfo.findUnique({
      where: {
        personalEmail: session?.user?.email,
      },
    });
    return user?.id;
  }
};

async function uploadFile(file: Blob, userId: number) {
  const uuidFileName = uuidv4() + '.jpg';

  const { data, error } = await supabase.storage
    .from('user-images')
    .upload(userId + '/' + uuidFileName, file);

  if (error) {
    console.error(error);
  } else {
    console.log('Image Uploaded - confirm it on supabase', data);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const fileBuffer = await req.blob();

  const userId = await getUserId();
  userId && await uploadFile(fileBuffer, userId);
  
  return new Response('Image Uploaded');
}
