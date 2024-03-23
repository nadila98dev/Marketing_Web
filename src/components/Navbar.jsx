import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

const Navbar = () => {
    let Links = [
        {name: 'Table Marketing', link: '/'},
        {name: 'Table Commission', link: '/tablecommission'},
        {name: 'Table Penjualan', link: '/tablepenjualan'},
        {name: 'Table Pembayaran', link: '/tablepembayaran'}
    ]

    let [open, setOpen]= useState(false)

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex bg-white py-4 md:px-10 px-7 justify-between items-center'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-mallory text-gray-800'>
        Dashboard
      </div>
        <div onClick={() =>setOpen(!open)}
        className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
             <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul
        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-5 pr-5 transition-all duration-500 ease-in 
        // tenary IF else
        ${
          open ? 'top-23 ' : 'top-[-490px]'
        }`}
        // Map
      >
        {Links.map((link) => (
          <li key={link.name} className='ml-5 text-xl md:my-0 my-7'>
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}

        </ul>
        </div>
        
    </div>
  )
}

export default Navbar