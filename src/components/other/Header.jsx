import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex item-end justify-between'>
            <h1 className='text-white text-2xl'>Hello <br/> <span className='text-3xl font-semibold'>Piyush👋</span></h1>
            <button className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>LogOut</button>
        </div>
    </div>
  )
}

export default Header