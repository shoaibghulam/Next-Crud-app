"use client";
import React, { useState } from 'react'
import { addUser } from '../services/signupServices';
import { toast } from 'react-toastify';
import {Formik, useFormik} from 'formik';
import * as yup from "yup"
export default function Signup() {
 
  
  const formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
    },
    validationSchema: yup.object({
      firstName:yup.string().max(30,"Must be at least 30 characters").required(""),
      lastName:yup.string().max(30,"Must be at least 30").required(""),
      email:yup.string().email("invalid Email Address").required(""),  
      password:yup.string().min(8,"password must be at least 8 characters").max(30,"password must be at least 30 characters").required(""),
    }),
    onSubmit:async(values)=>{
      const user = await addUser(values)
     
      
      console.log("the user is ",user)
      
      toast.success("User has been added")
    }
  })
  // console.log(formik.errors.firstName)
  return (
    <>
    <div className="flex justify-center items-center  bg-gray-100">
  <div className="bg-white p-8 rounded-md shadow-md w-1/2 mt-20">
    <h1 className="text-2xl font-semibold mb-4">Signup</h1>
    <form onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          First Name 
        </label>
        <input type="text" className="mt-1 p-2 w-full border rounded-md"
        name='firstName' onChange={formik.handleChange} 
        value={formik.values.firstName}
        required/>
        <span className="pl-1 text-red-400  text-[12px]">{formik.errors.firstName}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Last Name
        </label>
        <input type="text" className="mt-1 p-2 w-full border rounded-md" name='lastName' onChange={formik.handleChange} 
        value={formik.values.lastName}
        required/>
         <span className="pl-1 text-red-400  text-[12px]">{formik.errors.lastName}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" className="mt-1 p-2 w-full border rounded-md" 
        name='email' onChange={formik.handleChange} 
        value={formik.values.email}
        required
        />
         <span className="pl-1 text-red-400  text-[12px]">{formik.errors.email}</span>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input type="password" className="mt-1 p-2 w-full border rounded-md" name='password' onChange={formik.handleChange} 
        value={formik.values.password}
        required/>
         <span className="pl-1 text-red-400  text-[12px]">{formik.errors.password}</span>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Signup
      </button>
    </form>
  </div>
</div>

    </>
  )
}
