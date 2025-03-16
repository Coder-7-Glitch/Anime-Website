import React from 'react'
import Profile_Cards from "../data/Profile_Cards.json"
export default function Notes() {
  return (
    <div>
      {
        Profile_Cards.Notes.map((notes, i) => (
          <div className="notes bg-[#131212] px-5 py-6 rounded-[10px] mt-4">
            <h1 className='text-lg font-medium text-[#ff640a]'>
              Your Descripiton:
            </h1>
            <p>{notes.description}</p>
          </div>
        ))
      }
    </div>
  )
}
