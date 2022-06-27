import React from 'react'

function ExpenseCard(props) {
  
  const months = props.date.toLocaleString("en-US",{month:"long"});
  const day = props.date.toLocaleString("en-US",{day:"2-digit"});
  const year = props.date.getFullYear();
  return (
    <div className='flex w-[80vw] items-center justify-between bg-blue-900 text-white p-10 m-10 rounded-lg shadow-xl shadow-blue-400'>
      <div className='flex flex-col w-fit h-fit items-center bg-white text-blue-900 p-4 rounded-lg  border-blue-300 border-4'>
        <p className='font-bold'>{months}</p>
        <p className='mt-1 text-sm'>{year}</p>
        <p className='font-extrabold text-2xl'>{day}</p>
      </div>
      <div className='grow text-2xl font-bold pl-4'>{props.title}</div>
      <div className='bg-white text-blue-900 p-3 rounded-lg  border-blue-300 border-4 font-semibold'>{props.amount}</div>
    </div>
  )
}

export default ExpenseCard