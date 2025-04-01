import React from 'react'
import dataList from "../data/dataList.json"

export default function AnimeList() {
  return (
    <div>
        {
          dataList.map((list, i) => (
            <div className='bg-[#2c2c2c] rounded-[10px] p-6 mb-5 shadow-[0_4px_12px_rgba(150,150,150,0.4)] flex gap-6' key={i}>
              <div className="img w-[20%]">
                <img src={list.animeImg} alt="IMG" className='w-full rounded-sm' />
              </div>
              <div className="content">
                <h1 className="text-2xl font-medium text-[#ff640a]">{list.animeName}</h1>
                <h1 className="text-2xl font-medium text-[#ff640a] my-3">{list.releaseDate}</h1>
                <h1 className="text-2xl font-medium text-[#ff640a] my-3">{list.publishedcountry}</h1>
                <h1 className="text-2xl font-medium text-[#ff640a]">{list.animeDescription}</h1>
              </div>
            </div>
          ))
        }
      </div>
  )
}
