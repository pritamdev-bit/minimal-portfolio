import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Twitter } from './Twitter'
import { Linkedin } from './LinkedIn'
import { Ghp } from './Ghubprofile'
import { Myemail } from './Myemail'


const Communication = () => {
    return (
        <div className='mb-20'>
            <div className='flex gap-2 mb-6'>
                <Link href="/resume" target='_blank' className='w-fit flex items-center gap-1 dark:bg-black dark:text-white text-black px-2 py-1 rounded-md border border-gray-600 ring-black dark:ring-white hover:ring-2'>
                    <span>
                        <Image src="/resume.png" className='dark:invert' alt="resume" width={20} height={20} />
                    </span>
                    <span>
                        Resume &#47; CV
                    </span>
                </Link>
                <Link href="/contact" className='w-fit flex items-center gap-1 bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-md border border-gray-600  ring-yellow-400 dark:ring-gray-300 hover:ring-3'>
                    <span>
                        <Image src="/paper-plane.png" className='invert dark:invert-0' alt="resume" width={20} height={20} />
                    </span>
                    <span>
                        Get in touch
                    </span>
                </Link>
            </div>

            <div className='flex gap-2'>
                <Link href="https://x.com/rick_jsx" target='_blank'>
                    <Twitter />
                </Link>
                <Link href="https://www.linkedin.com/in/mandalpritam8617/" target='_blank'>
                    <Linkedin />
                </Link>
                <Link href="https://github.com/pritamdev-bit" target='_blank'>
                    <Ghp />
                </Link>
                <Link href="mailto:mandalpritam8617@gmail.com" target='_blank'>
                    <Myemail />
                </Link>

            </div>
        </div>
    )
}

export default Communication
