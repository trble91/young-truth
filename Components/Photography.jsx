import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Photography() {
  return (
    <div className='flex flex-col items-center'>
        <motion.div 
        initial={{
            y: 0,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 2,
        }}
        className="flex max-h-screen">
            <Image src="/Front.jpeg" alt="" height={300} width={300} className='rounded-l-2xl'/>    
            <Image src="/Power.jpeg" alt="" height={300} width={300} className=''/>    
            <Image src="/Side.jpeg" alt="" height={300} width={300} className='rounded-r-2xl'/>  
        </motion.div>
    </div>
  )
}
