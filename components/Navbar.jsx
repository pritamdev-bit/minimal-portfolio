"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'


const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const isDark = localStorage.getItem('theme')

        if (isDark === 'dark') {
            document.documentElement.classList.add('dark')
            setDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark')
            setDarkMode(false)

        }
    }, [])


    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setDarkMode(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setDarkMode(true)
        }
    }

    return (
        <div className='md:w-[775px] mx-auto w-full bg-[rgba(255,255,255,0.027)] backdrop-blur-[8px] sticky top-0 z-10'>
            <nav className="flex justify-between items-center p-4 w-full">
                <div className="flex gap-4 items-center dark:text-white text-black">
                    <Link href="/" className='rounded-md w-[50px] h-[60px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-90'><Image src="/avatar.png" className='transition-all duration-300 ease-in-out hover:scale-90 rounded-md' alt="logo" width={50} height={50} /></Link>
                    <Link href="/projects"><span className='hover:text-[#909092] hover:font-bold transition-all duration-300 ease-in-out'>Projects</span></Link>
                    <Link href="/contact"><span className='hover:text-[#909092] hover:font-bold transition-all duration-300 ease-in-out'>Contact</span></Link>
                </div>
                <div>
                    <button type="button" onClick={() => { toggleDarkMode() }} className="rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-hidden">
                        <span className="group inline-flex shrink-0 justify-center items-center size-9">
                            <svg className="shrink-0 size-4 dark:hidden block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                            </svg>
                            <svg className="shrink-0 size-4 dark:block hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2"></path>
                                <path d="M12 20v2"></path>
                                <path d="m4.93 4.93 1.41 1.41"></path>
                                <path d="m17.66 17.66 1.41 1.41"></path>
                                <path d="M2 12h2"></path>
                                <path d="M20 12h2"></path>
                                <path d="m6.34 17.66-1.41 1.41"></path>
                                <path d="m19.07 4.93-1.41 1.41"></path>
                            </svg>
                        </span>
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar
