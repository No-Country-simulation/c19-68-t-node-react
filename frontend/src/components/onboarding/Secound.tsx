import Image from 'next/image'
import React from 'react'

const Secound = () => {
  return (
    <div className='h-[500px] flex flex-col justify-center items-center'>
        <Image
        src={'/onbording-secound.png'}
        width={400}
        height={300}
        alt='onbording'
        />
        <p className='w-[329px] h-[44px] font-bold text-center'>Accede a tus historiales médicos y recomendaciones personalizadas de manera segura</p>
        <div className='w-[78px] h-[50px] flex gap-2 items-end'>
            <div className='w-[10px] bg-[#D9D9D9] h-[10px] rounded-full'></div>
            <div className='w-[22px] rounded-lg bg-[#4F4F4F] h-[10px]'></div>
            <div className='w-[10px] bg-[#D9D9D9] h-[10px] rounded-full'></div>
            
        </div>
    </div>
  )
}

export default Secound