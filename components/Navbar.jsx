"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { ModeToggle } from './ToggleDarkMode'


const Navbar = () => {
    return (
        <div className='md:w-[775px] mx-auto w-full bg-[rgba(255,255,255,0.027)] backdrop-blur-[8px] sticky top-0 z-10'>
            <nav className="flex justify-between items-center p-4 w-full">
                <div className="flex gap-4 items-center dark:text-white text-black">
                    <Link href="/" className='rounded-md w-[50px] h-[60px] overflow-hidden transition-all duration-300 ease-in-out hover:scale-90'><Image src="/avatar.png" className='transition-all duration-300 ease-in-out hover:scale-90 rounded-md' alt="logo" width={50} height={50} /></Link>
                    <Link href="/projects"><span className='hover:text-[#909092] hover:font-bold transition-all duration-300 ease-in-out'>Projects</span></Link>
                    <Link href="/contact"><span className='hover:text-[#909092] hover:font-bold transition-all duration-300 ease-in-out'>Contact</span></Link>
                </div>
                <ModeToggle />

            </nav>
        </div>
    )
}

export default Navbar
