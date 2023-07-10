import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="sticky bottom-0 p-5 flex-row-reverse items-end justify-between max-w-7xl mx-auto z-20 xl:items-center"> 
    <div>
        <a href="https://www.bit.ly/daleyportfolio" className='flex relative float-right'>
            <Image 
            src="/assets/aaron.png"
            alt="" width={50} height={50} />
       </a>
    </div>
</footer>
  )
}
