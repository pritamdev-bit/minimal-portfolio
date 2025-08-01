
import Link from 'next/link'
import React from 'react'
import ProjectGrid from './ProjectGrid'

const Projects = () => {
    return (
        <div>
            <div className='mb-6'>
                <div className='text-sm'>Featured</div>
                <div className='dark:text-white text-black text-2xl font-bold'>Projects</div>
            </div>

            <ProjectGrid />
            <div className='w-full flex justify-center'>
                <Link href="/projects"><button className='dark:bg-[#1C1C1C] dark:hover:bg-[#2d2d2d] cursor-pointer border border-gray-600 dark:text-white text-black hover:bg-[#e5e5e5] px-3 py-2 text-sm rounded-md'>View All Projects</button></Link>
            </div>
        </div>
    )
}

export default Projects
