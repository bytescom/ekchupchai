"use client";

import Link from 'next/link'
import React from 'react'
import { signIn } from 'next-auth/react';
import { FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"

const login = () => {
    const { data: session } = useSession();
    if(session ){
        const route = useRouter()
        route.push("/dashboard")
    }
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>

                {/* GitHub Login Button */}
                <button
                    onClick={()=> signIn("github")}
                    className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 cursor-pointer transition duration-200 mb-4"
                >
                    <FaGithub />
                    Login with GitHub
                </button>

                <div className="relative mb-4">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:text-indigo-600 placeholder-gray-400"
                            placeholder="your@email.com"
                            required
                        />
                    </div>


                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
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
                        Login
                    </button>


                    <p className="text-sm text-gray-600 text-center mt-4">
                        Don't have an account?
                        <Link className='hover:underline text-indigo-600' href="/auth/signup"> Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default login
