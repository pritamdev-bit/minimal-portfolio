import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Site } from './Site'
import { Ghp } from './Ghubprofile'
import { Nextic } from './iconstools/Nextic'
import { Tsic } from './iconstools/Tsic'
import { Reactic } from './iconstools/Reactic'
import { Vercelic } from './iconstools/Vercelic'
import { Twic } from './iconstools/Twic'
import { Magicic } from './iconstools/Magicic'
import { Shadcnic } from './iconstools/Shadcnic'
import { Appwriteic } from './iconstools/appwriteic'
import { ButtonLink } from './LinkButton'
import { Jsic } from './iconstools/Jsic'
import { Mongoic } from './iconstools/Mongoic'

const ProjectGrid = () => {
    return (
        <div className='w-full md:grid-cols-2 grid-cols-1 grid gap-10 mb-6'>
            <div className='border border-[#909092] md:w-[350px] w-full rounded-lg overflow-hidden'>
                <Link href="https://dev-quora-black.vercel.app/" target="_blank">
                    <div className='w-full overflow-hidden'>
                        <Image src="/dq.jpg" alt="projects" className='md:w-[350px] w-full' width={370} height={370} />
                    </div>
                </Link>
                <div className='p-6 dark:bg-[#171717]'>
                    <div className='flex justify-between'>
                        <div className='dark:text-white text-black text-xl font-semibold'>DevQuora</div>
                        <div className='flex gap-2'>
                            <span>
                                <Link href="https://dev-quora-black.vercel.app/" target="_blank" >
                                    <Site />
                                </Link>
                            </span>
                            <span>
                                <Link href="https://github.com/pritamdev-bit/DevQuora" target="_blank" >
                                    <Ghp />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <p className='my-4'>
                        A minmalistic QnA platform for developers. Ask questions and get answers from the community. Upvote and downvote questions and answers. Share your knowledge with the community.
                    </p>
                    <div className='text-sm mb-2'>Technologies</div>
                    <div className='flex gap-2 mb-4'>
                        <Appwriteic />
                        <Nextic />
                        <Tsic />
                        <Reactic />
                        <Vercelic />
                        <Twic />
                        <Shadcnic />
                        <Magicic />
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <ButtonLink link={"https://dev-quora-black.vercel.app/"} children={"Live Link"} />
                        <ButtonLink link={"https://github.com/pritamdev-bit/DevQuora"} children={"Github Repo"} />
                    </div>
                </div>

            </div>
            <div className='border border-[#909092] md:w-[350px] w-full rounded-lg overflow-hidden'>
                <Link href="https://blinktree.vercel.app/" target="_blank">
                    <div className='w-full overflow-hidden'>
                        <Image src="/btree.png" alt="projects" className='md:w-[350px] w-full' width={370} height={370} />
                    </div>
                </Link>
                <div className='p-6 dark:bg-[#171717]'>
                    <div className='flex justify-between'>
                        <div className='dark:text-white text-black text-xl font-semibold'>BlinkTree</div>
                        <div className='flex gap-2'>
                            <span>
                                <Link href="https://blinktree.vercel.app/" target="_blank" >
                                    <Site />
                                </Link>
                            </span>
                            <span>
                                <Link href="https://github.com/pritamdev-bit/blinktree" target="_blank" >
                                    <Ghp />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <p className='my-4'>
                        BlinkTree is your personal hub for all your important links. Whether you're a creator, entrepreneur, or brand, we make it simple to share everything that matters — all in one place.
                    </p>
                    <div className='text-sm mb-2'>Technologies</div>
                    <div className='flex gap-2 mb-4'>
                        <Nextic />
                        <Reactic />
                        <Mongoic />
                        <Jsic />
                        <Twic />
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <ButtonLink link={"https://blinktree.vercel.app/"} children={"Live Link"} />
                        <ButtonLink link={"https://github.com/pritamdev-bit/blinktree"} children={"Github Repo"} />
                    </div>
                </div>

            </div>
            <div className='border border-[#909092] md:w-[350px] w-full rounded-lg overflow-hidden'>
                <Link href="https://bitlinks-open.vercel.app/" target="_blank">
                    <div className='w-full overflow-hidden'>
                        <Image src="/blinks.png" alt="projects" className='md:w-[350px] w-full' width={370} height={370} />
                    </div>
                </Link>
                <div className='p-6 dark:bg-[#171717]'>
                    <div className='flex justify-between'>
                        <div className='dark:text-white text-black text-xl font-semibold'>BitLinks</div>
                        <div className='flex gap-2'>
                            <span>
                                <Link href="https://bitlinks-open.vercel.app/" target="_blank" >
                                    <Site />
                                </Link>
                            </span>
                            <span>
                                <Link href="https://github.com/pritamdev-bit/bitlinks" target="_blank" >
                                    <Ghp />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <p className='my-4'>
                        Bitlinks is a free and open source url shortener. It allows you to create short links for your long URLs. No need to sign up. You can use Bitlinks for free. Just add your long URL and get a short link.
                    </p>
                    <div className='text-sm mb-2'>Technologies</div>
                    <div className='flex gap-2 mb-4'>
                        <Nextic />
                        <Reactic />
                        <Mongoic />
                        <Jsic />
                        <Twic />
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <ButtonLink link={"https://bitlinks-open.vercel.app/"} children={"Live Link"} />
                        <ButtonLink link={"https://github.com/pritamdev-bit/bitlinks"} children={"Github Repo"} />
                    </div>
                </div>

            </div>
            <div className='border border-[#909092] md:w-[350px] w-full rounded-lg overflow-hidden'>
                <Link href="https://mypassop.netlify.app/" target="_blank">
                    <div className='w-full overflow-hidden'>
                        <Image src="/passop.jpg" alt="projects" className='md:w-[350px] w-full' width={370} height={370} />
                    </div>
                </Link>
                <div className='p-6 dark:bg-[#171717]'>
                    <div className='flex justify-between'>
                        <div className='dark:text-white text-black text-xl font-semibold'>PassOP</div>
                        <div className='flex gap-2'>
                            <span>
                                <Link href="https://mypassop.netlify.app/" target="_blank" >
                                    <Site />
                                </Link>
                            </span>
                            <span>
                                <Link href="https://github.com/pritamdev-bit/PassOP" target="_blank" >
                                    <Ghp />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <p className='my-4'>
                        A sleek and secure password manager. Store and manage your passwords locally on your device with ease. Keep your data safe and secure. Copy and paste your usernames and passwords with one click.
                    </p>
                    <div className='text-sm mb-2'>Technologies</div>
                    <div className='flex gap-2 mb-4'>
                        <Reactic />
                        <Jsic />
                        <Twic />
                    </div>
                    <div className='flex gap-2 justify-center'>
                        <ButtonLink link={"https://mypassop.netlify.app/"} children={"Live Link"} />
                        <ButtonLink link={"https://github.com/pritamdev-bit/PassOP"} children={"Github Repo"} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProjectGrid
