import { signIn } from 'next-auth/react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
    <button onClick={() => signIn()}>Join & Share</button>
    </footer>
  )
}
