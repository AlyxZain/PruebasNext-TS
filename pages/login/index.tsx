/** @format */

import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Login() {
  const router = useRouter();

  const initialValues = {
    email: '',
    password: '',
  };

  const validate = (values: any) => {
    const errors = {
      email: '',
      password: '',
    };

    if (!values.email) {
      errors.email = 'Email is required';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const onSubmit = () => {
    localStorage.setItem('logged', 'yes');
    // navigate('/', { replace: true });
    router.push('/');
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;

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
