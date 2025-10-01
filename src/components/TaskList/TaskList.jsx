import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 '>
       <div className=' flex-shrink-0 h-full p-5 overflow-x-auto  gap-5 w-[300px] bg-red-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='text-sm px-3 py-1 rounded bg-red-600'>high</h3>
            <h4 className='text-sm'>29 august 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque doloribus optio quidem dicta culpa et! Ad eligendi quam quaerat exercitationem!</p>
       </div>
       <div className=' flex-shrink-0  p-5 h-full overflow-x-auto  gap-5 w-[300px] bg-yellow-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='text-sm px-3 py-1 rounded bg-red-600'>high</h3>
            <h4 className='text-sm'>29 august 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque doloribus optio quidem dicta culpa et! Ad eligendi quam quaerat exercitationem!</p>
       </div>
       <div className=' flex-shrink-0 h-full p-5 overflow-x-auto  gap-5 w-[300px] bg-green-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='text-sm px-3 py-1 rounded bg-red-600'>high</h3>
            <h4 className='text-sm'>29 august 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque doloribus optio quidem dicta culpa et! Ad eligendi quam quaerat exercitationem!</p>
       </div>
       <div className=' flex-shrink-0 p-5 h-full overflow-x-auto  gap-5 w-[300px] bg-blue-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='text-sm px-3 py-1 rounded bg-red-600'>high</h3>
            <h4 className='text-sm'>29 august 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque doloribus optio quidem dicta culpa et! Ad eligendi quam quaerat exercitationem!</p>
       </div>
       <div className=' flex-shrink-0 p-5 h-full overflow-x-auto  gap-5 w-[300px] bg-purple-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='text-sm px-3 py-1 rounded bg-red-600'>high</h3>
            <h4 className='text-sm'>29 august 2025</h4>
           </div>
           <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
           <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque doloribus optio quidem dicta culpa et! Ad eligendi quam quaerat exercitationem!</p>
       </div>
       
    </div>
  )
}

export default TaskList