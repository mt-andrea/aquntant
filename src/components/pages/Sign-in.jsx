import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../const/style'
import { useNavigate } from 'react-router-dom';
import { ExclamationCircleFill } from 'react-bootstrap-icons'

const SignIn = (props) => {

  let navigate = useNavigate();

  const [message, setMessage] = useState("")

  const [data, setData] = useState({
    username: "",
    password: ""
  })

  function change(e) {  //without this, we are unable to type our username & password in
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  function signin(e) {
    e.preventDefault()
    if (data.username == "" || data.password == "") {
      setMessage("Username or password is empty!")
      return
    }else{
      props.loged=true
    }

    fetch('http://localhost:4000/login', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              "username": data.username,
              "password": data.password
          })
      })
          .then((response) => response.json())
          .then(json => {
            
            if (json.message == "Success") {
              sessionStorage.token = json.token
              props.beallit({ name:data.name, token:json.token}) //currently soft refresh for navbar
              navigate("/transactions")
            } else {
              setMessage(json.message)
            }
              
            
          })
          .catch(err => console.log(err))
  }

  const reg = (e) => {
    e.preventDefault()
    navigate('/sign-up')
  }

  const Message = () => {
    let feltetel = message != ""
    return (
      <p>{feltetel && <ExclamationCircleFill />} {message}</p>
    )
  }

  

  return (
    <div className='d-flex justify-content-center' style={style.content}>
      <form>
        <fielset className='m-3' style={{ width: '50vw' }}>
          <legend className='text-center'>Sign In</legend>
          <p className='text-center' style={style.message}>{<Message />}</p>
          <div className='d-flex flex-md-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-25' htmlFor="username">Username: </label>
            <input className='d-flex flex-column form-control w-50' type="text" name="username" id="username" value={data.username} onChange={change} />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-25' htmlFor="password">Password: </label>
            <input className='d-flex flex-column form-control w-50' type="password" name="password" id="password" value={data.password} onChange={change} />
          </div>
        </fielset>
        <div className='d-flex flex-row justify-content-around'>
          <button className='form-control btn m-3' style={style.btnPrim} onClick={signin} type="submit">Sign In</button>
          <button className='form-control btn m-3' style={style.btnSec} onClick={reg}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn