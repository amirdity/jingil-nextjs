import Image from 'next/image'
import React from 'react'
import image from '../../../public/enamad.png'
function BottemFooter() {
  return (
    <div className='h-[500px] w-full bg-rose-400 -z-40 flex flex-col lg:flex-row'>
      <div className='flex'></div>
      <div className='flex'>
        <Image src={image} className='w-auto'/>
      </div>
    </div>
  )
}

export default BottemFooter