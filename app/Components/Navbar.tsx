import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className=" bg-orange-400 h-20  flex-grow-1 justify-between items-center">
      {/* <Link href='/' className='flex text-gray-700 items-center'>
        <Image
        src={}
        width={80}
        height={80}
        />
      </Link> */}
      <div>
        <div className="flex">
          <Link href="/make-offer" className='flex text-gray-700 items-center m-auto mt-5 '> Go to form</Link>
        </div>
      </div>
    </nav>
  );
}
