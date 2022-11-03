/** @format */

import React from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { Notify } from '../../components/Notify';

export const Header = () => {
  const router = useRouter();

  const successToast = (message: string) => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    });
  };

  const logout = () => {
    successToast('You have successfully logout!');
    sessionStorage.removeItem('token');
    setTimeout(() => router.push('/login'), 3700);
  };

  return (
    <>
      <header>
        <span>Meow</span>
        <div onClick={logout}>X</div>
      </header>

      <Notify />
    </>
  );
};
