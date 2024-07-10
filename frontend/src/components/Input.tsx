import React from 'react'

interface Props {
  type: string
  id?: string
  name?: string
 twClass?: string
}

const Input = ({type, id, name, twClass}:Props) => {
  return (
    <input className={`bg-gray-300 py-1 px-2 rounded-lg ${twClass}`}  type={type} id={id} name={name}/>
  )
}

export default Input