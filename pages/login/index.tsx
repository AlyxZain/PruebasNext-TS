/** @format */

import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Notify } from '../../components/Notify';

export default function Login() {
  const router = useRouter();

  const errorToast = (message: string) => {
    toast.error(message, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

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

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Email must be a valid email')
        .required('Email is a required field'),
      password: Yup.string().min(6).required('Password is a required field'),
    }),
    onSubmit: (formData) => {
      const { email, password } = formData;

      const index = async () => {
        const logeo = await axios.get(
          `https://back-next-app.vercel.app/api/auth/login?email=${email}&password=${password}`
        );
        try {
          if (logeo.data?.token) {
            successToast("You've successfully logged in!");
            sessionStorage.setItem('token', logeo.data.token);
            setTimeout(() => router.push('/'), 3700);
          } else {
            console.log('errorA', logeo);
            errorToast(logeo.data);
          }
        } catch (error) {
          let errorb = '';
          if (typeof error === 'string') {
            errorb = error;
          }
          errorToast(errorb);
        }
      };

      index();
    },
  });

  const {
    values,
    handleBlur,
    handleChange,
    handleReset,
    handleSubmit,
    errors,
    touched,
  } = formik;

  return (
    <>
      <div className='auth'>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              name='email'
              type='email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>
          <div>
            <label>Password</label>
            <input
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
          </div>
          <div>
            <button type='submit'>Enviar</button>
          </div>
          <div>
            <Link href='/register'>Register</Link>
          </div>
        </form>
      </div>
      <Notify />
    </>
  );
}
