import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../const/style'

const SignUp = () => {
  return (
    <div className='d-flex justify-content-center' style={style.content} >
        <form>
      <fieldset className='m-3' style={{width: '50vw'}}>
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
      <button className='form-control btn m-3' style={style.btnPrim} type="submit">Register</button> 
      <button className='form-control btn m-3' style={style.btnSec} type="reset">Reset</button>
      </div>
        </form>
    </div>
  )
}

export default SignUp