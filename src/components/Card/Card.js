import React from 'react'
import Image  from 'next/image'

function Card() {
  return (
    <div className='grid grid-cols-[100px_2fr_1fr] text-white border-0 shadow-lg shadow-slate-400	mt-4 p-2		'>
    <div className='h-70 text-center mt-3'>
      <Image src="/praticien_default.gif" alt="logo"  width={70} height={70} className="rounded-full" />
    </div>
    <div className='text-center lg:text-left lg:ml-16'><h2>Pascal Chassot</h2>
      <p>Ophtalmologue</p>
      <p>Clinique ELSAN</p>
      <p>Tel : 3456789</p>

    </div>
    <div className='flex justify-center items-center'><button type='button' className='text-white h-12 px-1 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm   mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Rendez-vous</button></div>
  </div>
  )
}

export default Card