import React from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' id='usernmae' placeholder='username' className='border p-3 rounded-lg'/>
        <input type='email' id='' placeholder='email' className='border p-3 rounded-lg'/>
        <input type='password' id='' placeholder='password' className='border p-3 rounded-lg'/>
        <button className='bg-slate-800 text-white p-3 rounded-lg uppercase hover:opacity-80 disabled:opacity-60'></button>
      </form>
      <div className='flex gap-2 mt-6'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-800'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
