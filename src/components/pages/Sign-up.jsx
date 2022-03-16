import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUp = () => {
  return (
    <div className='d-flex flex-column justify-content-center'>
        <form>
      <fieldset className='m-3' style={{border: "3px solid #0D00FF", borderRadius:'20px'}}>
        <legend>Sign Up</legend>
          <div className='d-flex flex-md-row justify-content-around m-2'>
          <label className='d-flex flex-column' htmlFor="username">Username: </label>
          <input className='d-flex flex-column form-control' type="text" name="username" id="username" />
        </div>
          <div className='d-flex flex-md-row justify-content-around m-2'> 
          <label className='d-flex flex-column' htmlFor="email">E-mail: </label>
          <input className='d-flex flex-column form-control' type="email" name="email" id="email" />
          </div>
          <div className='d-flex flex-md-row justify-content-around m-2'> 
          <label className='d-flex flex-column' htmlFor="password">Password: </label>
          <input className='d-flex flex-column form-control' type="password" name="password" id="password" />
          </div>
          <div className='d-flex flex-md-row justify-content-around m-2'> 
          <label className='d-flex flex-column' htmlFor="retype">Retype Password: </label>
          <input className='d-flex flex-column form-control' type="password" name="retype" id="retype" />
          </div>
      </fieldset>
        </form>
    </div>
  )
}

export default SignUp