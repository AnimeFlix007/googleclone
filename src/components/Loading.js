import React from 'react'
import { Circles } from "react-loader-spinner"

const Loading = () => {
  return (
    <div className='flex justify-center items-center '>
        <Circles type="Puff" color="#00BFFF" height={450} width={80} />
    </div>
  )
}

export default Loading