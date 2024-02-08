"use client";
import Link from 'next/link';
import React from 'react'

export default function page() {

  return (
    <div className="bg-blue-500 py-4">
  <div className='container px-10 '>
     <div className="flex flex-row justify-between items-center">
     <div className='text-2xl text-white'>Task Manager</div>
        <nav className='flex flex-row gap-10 text-white'>
         
           <Link href={"/"}>Home</Link>
           <Link href={"/add-task"}>Add Task</Link>
          
           <a href="#">Contact Us</a>
        </nav>
        <div className='text-white'>
          <Link href={"/signup"}>Sign Up</Link>
        </div>
     </div>
       
    </div>
    </div>
  
  )
}
