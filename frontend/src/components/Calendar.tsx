import React from 'react'

interface Props {
    calendar: any
    twClass?: string
    sizeCalendar?: string
    sizeDate?: string
    sizeDay?: string
    sizeMonthAndYear?: string
}

const Calendar = ({calendar, twClass, sizeCalendar, sizeDate, sizeDay, sizeMonthAndYear}:Props) => {
/* Colocar las medidas de width, heigth y textsize */

  return (
    <div className={`flex flex-col items-center relative gap-[7px] ${twClass}`}>
              <div className={`z-10 bg-white flex flex-col text-[#525252]  justify-center items-center border-solid rounded-lg ${sizeCalendar}`}>
                <div className='absolute top-1 left-1 w-[20px] flex gap-[2px]'>
                  <div className='w-[3px] h-[3px] bg-[#812b75] rounded-full'></div>
                  <div className='w-[3px] h-[3px] bg-[#d8d8d8] rounded-full '></div>
                </div>
                <span className={`${sizeDate} mt-[3px] font-semibold text-[#812b75] capitalize`}>
                {calendar[0]}
                  
                </span>
                <span className={`${sizeDay} h-[60%]`}>
                {calendar[3]}
                </span>

              </div>
              <span className={`capitalize font-bold ${sizeMonthAndYear}`}>
                {calendar[2]} {calendar[5]}
              </span>
            </div>
  )
}

export default Calendar