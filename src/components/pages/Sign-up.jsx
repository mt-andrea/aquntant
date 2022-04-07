import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../const/style'
import { useNavigate } from 'react-router-dom';
import {ExclamationCircleFill} from 'react-bootstrap-icons'



export default function SignUp(props)  {
  

  let navigate = useNavigate();

  const [message, setMessage] = useState("")

  const [data, setData] = useState({
      username: "",
      password: "",
      retype: "",
      email: ""
  })

  function change(e) {
    const { name, value } = e.target
    setData({
        ...data,
        [name]: value
    })
}

    function register(e) {
      e.preventDefault()
      if (data.username=="" || data.password=="" || data.email=="") {
          setMessage("Username, email or password is empty!")
          return
      }

      if (data.retype !== data.password) {
        e.preventDefault()
          setMessage("The passwords do not match!")
          return
      }
      fetch('http://localhost:4000/register', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              "username": data.username,
              "password": data.password,
              "email": data.email,
              "retype": data.retype
          })
      })
          .then((response) => response.json())
          .then(json => {
            if(json.message == "Success") {
              navigate("/successfull-reg")
            } else {
              setMessage(json.message)
            }
          })
          .catch(err => console.log(err))
  }
  const Message = () => {
    let feltetel=message!=""
    return (
      <p>{feltetel && <ExclamationCircleFill/>} {message}</p> 
    )
  }
  return (
    <div className='d-flex justify-content-center' style={style.content} >
        <form>
      <fieldset className='m-3' style={{width: '50vw'}}>
        <legend className='text-center'>Sign Up</legend>
        <p className='text-center' style={style.message}>{<Message/>}</p>
          <div className='d-flex flex-md-row justify-content-evenly m-2'>
          <label className='d-flex flex-column align-items-end w-25' htmlFor="username">Username: </label>
          <input className='d-flex flex-column form-control w-50' type="text" name="username" id="username" value={data.username} onChange={change} />
        </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="email">E-mail: </label>
          <input className='d-flex flex-column form-control w-50' type="email" name="email" id="email" value={data.email} onChange={change} />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="password">Password: </label>
          <input className='d-flex flex-column form-control w-50' type="password" name="password" id="password" value={data.password} onChange={change} />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="retype">Retype Password: </label>
          <input className='d-flex flex-column form-control w-50' type="password" name="retype" id="retype" value={data.repassword} onChange={change} />
          </div>
      </fieldset>
      <div className='d-flex flex-row justify-content-around'>
      <button className='form-control btn m-3' style={style.btnPrim} onClick={register} type="submit">Register</button> 
      <button className='form-control btn m-3' style={style.btnSec} type="reset">Reset</button>
      </div>
        </form>
    </div>
  )
}

