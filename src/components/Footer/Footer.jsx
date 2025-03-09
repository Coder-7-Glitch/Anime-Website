import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-200 bg-[#2c2c2c] body-font mt-20">
        <div className="container px-20 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="grid grid-cols-5">
            <div className="first-col">
              <Link to={'/'}>
                <div className="logo flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                  <img src="/assets/icons/Favicon.svg" alt="" className='w-[2rem]' />
                  <h1 className='ml-3 text-[#ff640a] text-xl font-K2D'>AnimeSaga</h1>
                </div>
                <div className="content mt-6 text-sm text-gray-300">
                  <p>We provide high-quality anime streaming with fast updates and a seamless experience.</p>
                </div>
              </Link>
            </div>
            <div className="second-col">
              <div className="heading">
                <h1 className='title-font font-medium text-[#ff640a] tracking-widest text-[18px] mb-2'>Pages</h1>
              </div>
              <ul>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Home</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>About Us</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Latest Anime</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>News</Link>
                </li>
              </ul>
            </div>
            <div className="third-col">
              <div className="heading">
                <h1 className='title-font font-medium text-[#ff640a] tracking-widest text-[18px] mb-2'>Browse</h1>
              </div>
              <ul>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Action & Adventure</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Comedy</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Romance</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Movies</Link>
                </li>
              </ul>
            </div>
            <div className="fourth-col">
              <div className="heading">
                <h1 className='title-font font-medium text-[#ff640a] tracking-widest text-[18px] mb-2'>Account</h1>
              </div>
              <ul>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Watchlist</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>History</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>My Profile</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Log Out</Link>
                </li>
              </ul>
            </div>
            <div className="fifth-col">
              <div className="heading">
                <h1 className='title-font font-medium text-[#ff640a] tracking-widest text-[18px] mb-2'>Contact Us</h1>
              </div>
              <ul>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Twitter</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Youtube</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Facebook</Link>
                </li>
                <li className='mt-1'>
                  <Link to={'/'} className='text-gray-400 hover:text-[#ff640a]'>Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-section container mx-auto py-4 px-5 text-center bg-[#ff640a]">
          <h1 className='text-black text-[16px] text-center font-medium'>© Copyright 2025 Anime Saga. All rights reserved</h1>
          </div>
      </footer>
    </div>
  )
}
