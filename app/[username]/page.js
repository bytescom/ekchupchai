"use client"
import React from 'react'
import { FaUser } from "react-icons/fa";
import Payrecive from '@/components/usernamecom/payrecive';

const username = ({ params }) => {

  return (
    <>
      {/* {params.username} */}
      <div className='p-6'>
        <div className='overflow-hidden w-full h-[250px] rounded-3xl'>
          <img className='object-cover' src="/pexels-lexovertoom.jpg" alt="Cover Image" />
        </div>

        <div className='flex flex-col items-center justify-center'>
          <div className='rounded-[50px] border-amber-50 border-[1px] w-fit p-0.5 overflow-hidden'>
            <FaUser className='w-[5rem] h-[5rem] rounded-[50px]' />
          </div>
          <div className='text-center'>
            <h2 className='font-bold text-md'>Pankaj Kumar</h2>
            <p className='text-xs'>New Delhi</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-6 justify-center max-w-[80vw] mx-auto text-black" >
          <div className='w-[30vw] min-h-[400px] rounded-3xl bg-gray-100 p-6 space-y-4'>
            <h3 className='text-xl'>Recents Supports</h3>
            <div className='overflow-y-scroll h-[300px] bg-indigo-200'>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
              <p>hey i am using </p>
            </div>
          </div>

          <Payrecive/>
        </div>
      </div >
    </>
  )
}

export default username
