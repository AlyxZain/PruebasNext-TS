/** @format */

import React from 'react';

import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

// import '../Login/Login.styles.css';

export default function Register() {
  const [data, setData] = useState([]);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      userName: '',
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
      userName: Yup.string().min(6).required('Username is a required field'),
      password: Yup.string().min(6).required('Password is a required field'),
      // role: '',
      // continent: '',
      // region: '',
      // teamID: '',
    }),
    onSubmit: (formData) => {
      console.log(formData);

      const { email, userName, password } = formData;

      const index = async () => {
        const registro = await axios({
          method: 'post',
          url: `https://back-next-app.vercel.app/api/auth/register`,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: {
            email,
            userName,
            password,
          },
        });
        console.log(registro);
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
            name='userName'
            type='text'
            value={values.userName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.userName && touched.userName && <div>{errors.userName}</div>}
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
          {errors.password && touched.password && <div>{errors.password}</div>}
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
  );
}
