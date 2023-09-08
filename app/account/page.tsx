'use client';
import React, { useState } from 'react';

export default function page() {
  const [selection, setSelection] = useState('profile');

  const handleSelection = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelection(e.currentTarget.name);
    console.log('this is the selection', e.currentTarget.name);
  };
  return (
    <div>
      <button onClick={handleSelection} name="profile">
        Profile
      </button>
      <button onClick={handleSelection} name="form">
        Form
      </button>
      <button onClick={handleSelection} name="offers">
        My Offers
      </button>
    </div>
  );
}
