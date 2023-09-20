import { createClient } from '@supabase/supabase-js';
import React, { useState } from 'react';

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log(file);
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (file) {
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: file,
        });
        console.log(response);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default ImageUpload;
