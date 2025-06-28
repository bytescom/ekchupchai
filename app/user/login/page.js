import { Bentham } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const login = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
                <form className="space-y-4">
                   
                    <div>
                        <label for="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:text-indigo-600 placeholder-gray-400"
                            placeholder="your@email.com"
                            required
                        />
                    </div>

                    
                    <div>
                        <label for="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:text-indigo-600 placeholder-gray-400"
                            required
                            minlength="8"
                        />
                        <p className="mt-1 text-xs text-gray-500">Must be at least 6 characters</p>
                    </div>

                    <div className="flex items-center justify-end">
                        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 cursor-pointer transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Sign in
                    </button>

                
                    <p className="text-sm text-gray-600 text-center mt-4">
                        Don't have an account? 
                        <Link className='hover:underline text-indigo-600' href="/user/signup"> Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default login
