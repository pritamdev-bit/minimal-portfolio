import React from 'react'
import ProjectGrid from '@/components/ProjectGrid'

const page = () => {
  return (
    <div className='md:w-[775px] w-full mx-auto p-4'>
      <div className='my-6 text-center'>
        <h1 className='text-5xl font-bold dark:text-white text-black mb-3'>Projects</h1>
        <h2 className='text-lg'>My projects and work across different technologies and domains.</h2>
      </div>
      <div className='h-[0.1px] w-full bg-[#2a2a2a]'></div>

      <div>
        <div className='my-6'>
          <div className='dark:text-white text-black text-2xl font-bold'>All Projects</div>
        </div>

        <ProjectGrid />
      </div>
    </div>
  )
}

export default page
