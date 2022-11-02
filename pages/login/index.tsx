/** @format */

import axios from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

export default function Login() {
  const router = useRouter();

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
      console.log(formData);

      const { email, password } = formData;

      const index = async () => {
        const logeo = await axios.post(
          `https://back-next-app.vercel.app/api/auth/login`,
          {
            email,
            password,
          }
        );

        // const registro = await axios({
        //   method: 'post',
        //   url: `https://back-next-app.vercel.app/api/auth/register`,
        //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   data: {
        //     email,
        //     username: userName,
        //     password,
        //   },
        // });

        console.log(logeo);
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
          {errors.password && touched.password && <div>{errors.password}</div>}
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
        <div>
          <Link href='/register'>Register</Link>
        </div>
      </form>
    </div>
  );
}
