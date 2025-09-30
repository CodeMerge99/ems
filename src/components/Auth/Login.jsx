import React, { useState } from 'react'

const Login = () => {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const Submithandler =(e)=>{
        e.preventDefault;
        console.log("form submitted");
        console.log("email is:",email);
        console.log("password is",password);

        setEmail("");
        setPassword("");
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-2'>
          <form onClick={(e)=>Submithandler(e)}
          className='flex flex-col items-center justify-center'>
            <input
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}

             required className=' text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-white'  type='email' placeholder='Enter your email here'/>
            <input 
             value ={password}
             onChange={(e)=>{
                setPassword(e.target.value)
             }}
            required className=' text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-white' type='password' placeholder='Enter your password here'/>
            <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Login</button>
          </form>
        </div>

    </div>
  )
}

export default Login