import Image from 'next/image'
import React from 'react'

const Finaly = () => {
  return (
    <div className='h-[500px] flex flex-col justify-center items-center'>
        <Image
        src={'/onbording-finally.png'}
        width={400}
        height={300}
        alt='onbording'
        />
        <p className='w-[329px] h-[44px] font-bold text-center'>Fácil de usar y disponible en cualquier momento y lugar</p>
        <div className='w-[78px] h-[50px] flex gap-2 items-end'>
            <div className='w-[10px] bg-[#D9D9D9] h-[10px] rounded-full'></div>
            <div className='w-[10px] bg-[#D9D9D9] h-[10px] rounded-full'></div>
            <div className='w-[22px] rounded-lg bg-[#4F4F4F] h-[10px]'></div>
            
        </div>
    </div>
  )
}

export default Finaly