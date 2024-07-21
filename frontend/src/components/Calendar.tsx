import React from 'react'

interface Props {
    calendar: any
}

interface Calendar {
    
}

const Calendar = ({calendar}:Props) => {

  return (
    <div className="flex flex-col items-center">
              <div className="w-[105px] h-[105px] flex items-center justify-center text-[60px] border-2 border-solid">
                {calendar[0]}
              </div>
              <span className="capitalize">
                {calendar[1]} {calendar[2]}
              </span>
            </div>
  )
}

export default Calendar