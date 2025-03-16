import React from 'react'
import Profile_Cards from "../data/Profile_Cards.json"

export default function Other() {
  return (
    <div>
      {
        Profile_Cards.Other.map((other, i) => (
          <div className="first-div bg-[#131212] px-5 py-6 rounded-[10px]" key={i}>
            <div className="first-detail flex gap-2">
              <p className='text-lg font-medium text-[#ff640a]'>Full Name: </p>
              <p className='text-lg'>{other.name}</p>
            </div>
            <hr className="my-4 border-[#303030]" />
            <div className="second-detail flex gap-2">
              <p className='text-lg font-medium text-[#ff640a]'>Email: </p>
              <p className='text-lg'>{other.email}</p>
            </div>
            <hr className="my-4 border-[#303030]" />
            <div className="third-detail flex gap-2">
              <p className='text-lg font-medium text-[#ff640a]'>Mobile: </p>
              <p className='text-lg'>{other.contactNo}</p>
            </div>
            <hr className="my-4 border-[#303030]" />
            <div className="third-detail flex gap-2">
              <p className='text-lg font-medium text-[#ff640a]'>Phone: </p>
              <p className='text-lg'>{other.contactNo}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
