import Button from '@/app/Components/Button';
import { User } from '@/app/types';
import { signOut } from 'next-auth/react';
import React, { useState } from 'react';

type Props = {
  handleEdit: Function;
  userData: User;
};

export default function EditProfile({ handleEdit, userData }: Props) {
  const [profileValues, setProfileValues] = useState<User>({
    personalImage: userData.personalImage,
    personalName: userData.personalName,
    personalEmail: userData.personalEmail,
    businessImage: userData.businessImage,
    businessName: userData.businessName,
    businessEmail: userData.businessEmail,
    businessPhoneNr: userData.businessPhoneNr,
    businessAdress: userData.businessAdress,
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="profile-wrapper">
      <img src={userData.personalImage} alt="profile-image" />
      <h3>Welcome, {userData.personalName.split(' ')[0]}!</h3>

      <p>PERSONAL INFO: </p>
      <div className="label-input-wrap">
        <label>Personal Name:</label>
        <input
          type="text"
          defaultValue={userData.personalName}
          name="personalName"
          onChange={handleOnChange}
          value={profileValues.personalName}
          required
        />
      </div>

      <div className="label-input-wrap">
        <label>Personal Email:</label>
        <input
          type="text"
          defaultValue={userData.personalEmail}
          name="personalEmail"
          onChange={handleOnChange}
          value={profileValues.personalEmail}
          required
        />
      </div>

      <div className="label-input-wrap">
        <p>BUSINESS INFO (Shown):</p>
        <label>Business Image:</label>
        <input
          type="text"
          defaultValue={userData.businessImage}
          name="businessImage"
          onChange={handleOnChange}
          value={profileValues.businessImage}
          required
        />
      </div>

      <div className="label-input-wrap">
        <label>Business Name:</label>
        <input
          type="text"
          defaultValue={userData.businessName}
          name="businessName"
          onChange={handleOnChange}
          value={profileValues.businessName}
          required
        />
      </div>

      <div className="label-input-wrap">
        <label>Phone Number:</label>
        <input
          type="text"
          defaultValue={userData.businessPhoneNr}
          name="businessPhoneNr"
          onChange={handleOnChange}
          value={profileValues.businessPhoneNr}
          required
        />
      </div>

      <div className="label-input-wrap">
        <label>Business Adress:</label>
        <input
          type="text"
          defaultValue={userData.businessAdress}
          name="businessAdress"
          onChange={handleOnChange}
          value={profileValues.businessAdress}
          required
        />
      </div>

      <Button
        action={() => signOut({ callbackUrl: '/' })}
        className="account-button"
        text="Sign Out"
      />
      <Button action={handleEdit} className="account-button" text="Edit" />
      <Button
        action={() => alert('Delete Selected')}
        className="account-button"
        text="Delete"
      />
    </section>
  );
}
