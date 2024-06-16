import React from 'react'
export default function Navbar() {
  return (
   
    <nav className='flex justify-between bg-slate-700 text-white p-3'>
      <div className="logo">
        <span className='font-bold text-xl mx-8 '>iTask</span>
      </div>
      <ul className='flex gap-8 mx-7'>
        <li className='curser-pointer hover:font-bold transition-all'>Home</li>
        <li className='curser-pointer hover:font-bold transition-all'>Your Task</li>
      </ul>
    </nav>
      )
}
