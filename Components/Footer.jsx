import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="sticky bottom-0 p-5 flex-row-reverse items-end justify-between max-w-7xl mx-auto z-20 xl:items-center"> 
    <div>
        <a href="" className='flex flex-col relative float-right'>
            <Image
              src="/YT2017.png"
              alt="" width={100} height={100} />
       </a>
    </div>
</footer>
  )
}
