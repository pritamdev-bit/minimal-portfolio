import React from 'react'

const Footer = () => {
  const getYear = ()=> {
    const newDate = new Date();
    return newDate.getFullYear();
  }
  const currentYear = getYear();

  return (
    <div className='my-6'>
      <footer className='w-full text-center'>
        <p>Designed & Developed by <span className='font-bold'>Pritam Mandal</span></p>
        <p>&copy; {currentYear}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Footer
