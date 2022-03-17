import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  return (
    <div className='d-flex justify-content-center'>
        <form>
      <fieldset className='m-3' style={{border: "3px solid #0D00FF", borderRadius:'20px', width: '50vw'}}>
        <legend className='text-center'>Sign Up</legend>
          <div className='d-flex flex-md-row justify-content-evenly m-2'>
          <label className='d-flex flex-column align-items-end w-25' htmlFor="username">Username: </label>
          <input className='d-flex flex-column form-control w-50' type="text" name="username" id="username" />
        </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="email">E-mail: </label>
          <input className='d-flex flex-column form-control w-50' type="email" name="email" id="email" />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="password">Password: </label>
          <input className='d-flex flex-column form-control w-50' type="password" name="password" id="password" />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="retype">Retype Password: </label>
          <input className='d-flex flex-column form-control w-50' type="password" name="retype" id="retype" />
          </div>
      </fieldset>
      <div className='d-flex flex-row justify-content-around'>
      <button className='form-control btn btn-info m-3' type="submit">Register</button> <button className='form-control btn btn-outline-info m-3' type="reset">Reset</button>
      </div>
        </form>
    </div>
  )
}

export default SignUp