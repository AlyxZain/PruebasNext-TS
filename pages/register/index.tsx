/** @format */

import React from 'react';

import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Notify } from '../../components/Notify';

export default function Register() {
  const router = useRouter();

  let token: string = '';

  if (typeof window !== 'undefined') {
    // You now have access to `window`
    if (window.sessionStorage) {
      const local = sessionStorage.getItem('token');
      if (typeof local === 'string') {
        token = local;
      }
    }
  }

  useEffect(() => {
    if (token.length > 0) {
      router.push('/');
    } else {
      console.log('logeado');
    }
  }, []);

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
      username: '',
      password: '',
      role: '',
      continent: '',
      region: '',
      teamID: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Email must be a valid email')
        .required('Email is a required field'),
      username: Yup.string().min(6).required('Username is a required field'),
      password: Yup.string().min(6).required('Password is a required field'),
      // role: '',
      // continent: '',
      // region: '',
      // teamID: '',
    }),
    onSubmit: (formData) => {
      const { email, username, password } = formData;

      const index = async () => {
        const registro = await axios.post(
          `https://back-next-app.vercel.app/api/auth/register`,
          {
            email,
            username,
            password,
          }
        );
        try {
          if (registro.data?.token) {
            successToast(
              "You've successfully registered! You're now logged in."
            );
            sessionStorage.setItem('token', registro.data.token);
            sessionStorage.setItem('email', email);
            setTimeout(() => router.push('/'), 3700);
          } else {
            errorToast(registro.data);
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
          <h1>Register</h1>
          <div>
            <label>Email</label>
            <input
              name='email'
              type='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>

          <div>
            <label>User Name</label>
            <input
              name='username'
              type='text'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.username && touched.username && (
              <div>{errors.username}</div>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div>{errors.password}</div>
            )}
          </div>

          {/* <div>
          <label>Rol</label>
          <select
            name='role'
            value={values.role}
            onChange={handleChange}
            onBlur={handleBlur}
            type='select'>
            <option value=''>Select any role</option>
            <option value='teamMember'>Team Member</option>
            <option value='teamLeader'>Team Leader</option>
          </select>
          {errors.role && touched.role && <div>{errors.role}</div>}
        </div> */}

          {/* <div>
          <label>Continent</label>
          <select
            name='continent'
            value={values.continent}
            onChange={handleChange}
            onBlur={handleBlur}
            type='select'>
            <option value=''>Select any continent</option>
            <option value='America'>America</option>
            <option value='Europe'>Europe</option>
            <option value='Other'>Other</option>
          </select>
          {errors.continent && touched.continent && (
            <div>{errors.continent}</div>
          )}
        </div> */}

          {/* <div>
          <label>Region</label>
          <select
            name='region'
            value={values.region}
            onChange={handleChange}
            onBlur={handleBlur}
            type='select'>
            <option value=''>Select any region</option>
            <option value='Latam'>Latam</option>
            <option value='Brazil'>Brazil</option>
            <option value='North America'>North America</option>
            <option value='Other'>Other</option>
          </select>
          {errors.region && touched.region && <div>{errors.region}</div>}
        </div> */}

          <input
            type='hidden'
            name='teamID'
            value='9cdb108-f924-4383-947d-8f0c651d0dad'
          />
          <div>
            <button type='submit'>Enviar</button>
          </div>
          <div>
            <Link href='/login'>Login</Link>
          </div>
        </form>
      </div>
      <Notify />
    </>
  );
}
