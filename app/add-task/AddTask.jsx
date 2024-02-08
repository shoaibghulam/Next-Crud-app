"use client";
import React, { useState } from 'react';
import { addTaskData } from '../services/taskServices';
import {useFormik} from 'formik'
import * as yup from 'yup'
export default function AddTask(){
    const form= useFormik({
        initialValues:{
            title:'',
            details:'',
            status:'',
            userId:'64d14cdde3079e3425c31094'
        },
        validationSchema:yup.object({
            
                title: yup.string().max(140,"It least 140 characters").required(),
                details:yup.string().max(740,"It least 140 characters").required(),
                status:yup.string().max(100,"It least 140 characters").required()
                
            
        }),
        onSubmit:async(e,{resetForm })=>{
          
        const addData = await addTaskData(form.values)
        resetForm();
        console.log("the add data is ",addData)
        }
    })
  
    return(
        <>
       <div className="container m-auto">
        <div className="w-1/2 m-auto mt-2 bg-gray-200 py-10 rounded-sm shadow-lg">
            <h1 className="text-3xl text-gray-900 font-bold text-center">
                Add Todo Task
            </h1>
            <form className="flex flex-col gap-6" onSubmit={form.handleSubmit}>
                <div className="px-6 space-y-2">
                <label >Title</label>
                <input type="text" name='title' onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.title} 
                className="py-2 w-full outline-none bg-transparent px-1 border border-black border-dashed rounded-md"  placeholder="Enter Title" />
                <span className="pl-1 text-red-400  text-[12px]">{form.touched.title && form.errors.title ? form.errors.title : null}</span>
     
                </div>
                <div className="px-6 space-y-2">
                <label >Details</label>
                <textarea type="text" className="py-2 w-full outline-none bg-transparent px-1 border border-black border-dashed rounded-md h-32" placeholder="Enter Details"
                name='details'
                 onChange={form.handleChange}
                 onBlur={form.handleBlur}
                value={form.values.details} 
                required></textarea>
                  <span className="pl-1 text-red-400  text-[12px]">{form.touched.details && form.errors.details ? form.errors.details : null}</span>
                </div>
                <div className="px-6 space-y-3">
                    <select name="status"  className="py-2 w-full outline-none bg-transparent px-1 border border-black border-dashed rounded-md"
                  
                    onChange={form.handleChange}  onBlur={form.handleBlur}
                value={form.values.status} required>
                        <option disabled>Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <span className="pl-1 text-red-400  text-[12px]">{form.touched.status && form.errors.status ? form.errors.status : null}</span>
                </div>
                <div className="px-6 space-y-3 text-center">
                   <button className="py-2 px-6 rounded-xl text-center bg-blue-500 text-white" type="submit">Add Todo</button>
                  
                </div>
            </form>
        </div>
       </div>
        </>
    )
}