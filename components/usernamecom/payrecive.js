import React from 'react'
import { useState } from 'react';


const payrecive = () => {
    const [selectedNumber, setSelectedNumber] = useState(1);
    return (
        <div className='w-[30vw] rounded-3xl bg-blue-100 p-6 gap-1.5'>
            <h2 className='text-xl font-extrabold mb-2 ml-2'>Get Me a Cup of Chai</h2>
            <div className='flex justify-between items-center gap-2 bg-white rounded-3xl p-4 shadow-lg border border-gray-100 max-w- mx-auto'>
                <button className='w-12 h-12 bg-gray-300 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform'>
                    <img src='/tea_cup.png' alt='tea cup' className='w-10 h-10 object-contain' />
                </button>

                <div className='text-gray-400 text-3xl font-light'>×</div>

                {[1, 3, 5].map(num => (
                    <button
                        key={num}
                        onClick={() => setSelectedNumber(num)}
                        className={`w-12 h-12 rounded-2xl text-xl font-semibold transition-all cursor-pointer ${selectedNumber === num
                            ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                            : 'bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-400 hover:text-blue-500 hover:scale-102'
                            }`}
                    >
                        {num}
                    </button>
                ))}

                <input
                    // type='number'
                    placeholder='10'
                    className='w-12 h-12 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl text-xl font-semibold text-center placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all'
                />
            </div>
            <div>
                <input
                    // type='text'
                    placeholder='Name or @yoursocial'
                    className='w-full h-12 bg-white border-2 p-4 border-gray-200 text-gray-700 rounded-2xl text-start placeholder-gray-600 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all'
                />

                <textarea
                    placeholder='Say Something'
                    className='w-full h-[9rem] max-h-[16rem] bg-white border-2 border-gray-200 text-gray-700 rounded-2xl placeholder-gray-600 p-4 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all resize-none'
                    rows={1}
                    onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                ></textarea>

                <button class="w-[99%] h-10 rounded-2xl cursor-pointer text-white bg-indigo-500 hover:bg-indigo-600  focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 ...">
                    Save changes
                </button>
            </div>
        </div>
    )
}

export default payrecive
