/* eslint-disable no-restricted-globals */
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {style} from '../../const/style'
import Message from '../sub/Message';
import { FaTrashAlt } from "react-icons/fa";

const UserSettings = (props) => {
  let navigate = useNavigate();
  const token ="Bearer: "+sessionStorage.token
  const [message, setMessage] = useState("")
  const deleteUrl = 'http://localhost:4000/user'

  const [data, setData] = useState({
      oldpassword: "",
      newpassword: "",
      retype: "",
      oldemail: "",
      newemail: "",
      password:""
  })

  function change(e) {
    const { name, value } = e.target
    setData({
        ...data,
        [name]: value
    })
}
  function cleardata() {
    setData({
      oldpassword:"",
      newpassword:"",
      retype:"",
      oldemail:"",
      newemail:"",
      password:""
    })
  }
    function save1(e) {
      e.preventDefault()
      
      fetch('http://localhost:4000/change/pass', {
          method: 'PATCH',
          headers: {
              'Authorization': token,
              'Content-type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              "oldpassword": data.oldpassword,
              "newpassword": data.newpassword,
              "retype": data.retype
              
          })
      })
          .then((response) => response.json())
          .then(json => {
            if(json.message ="Succes") {
              logout()
            }
          })
          .catch(err => console.log(err))
  }
  function save2(e) {
    e.preventDefault()
    
    fetch('http://localhost:4000/change/email', {
        method: 'PATCH',
        headers: {
            'Authorization': token,
            'Content-type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            "oldemail": data.oldemail,
            "newemail": data.newemail,
            "password": data.password
        })
    })
        .then((response) => response.json())
        .then(json => {
          if(json.message ="Succes") {
            logout()
          }
        })
        .catch(err => console.log(err))
}

function delete_user() {
 if(confirm("Are you sure that you wanna delet your account?")){
  fetch(deleteUrl, {
      method: 'DELETE',
      headers: {
        'Authorization': token,
        'Content-type': 'application/json;charset=utf-8'
      }
    })
    .then((response) => response.json())
    .then(() => logout())
    .catch(err => console.log(err))
  }else{
    return
  }}
  


function logout() {
  sessionStorage.removeItem('token')
  props.beallit({token: ""})
  navigate("/")
}

//const media=useMediaQuery('(min-width: 500px)')
  return (
    <div style={style.content}>
    <form>
    <fieldset className='' style={{width:'75vw'}}>
    {<Message style={style.message} message={message}/>}
    <legend className='text-center'>Password modification</legend>
    <div className='d-flex flex-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor="oldpassword">Old Password: </label>
          <input className='d-flex flex-column form-control w-50' type="password" name="oldpassword" id="oldpassword" value={data.oldpassword} onChange={change} />
          </div>
    <div className='d-flex flex-md-row justify-content-evenly m-2'> 
    <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor="newpassword">New password: </label>
    <input className='d-flex flex-column form-control w-50' type="password" name="newpassword" id="newpassword" value={data.newpassword} onChange={change} />
    </div>
    <div className='d-flex flex-md-row justify-content-evenly m-2'> 
    <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor="retype">Retype New Password: </label>
    <input className='d-flex flex-column form-control w-50' type="password" name="retype" id="retype" value={data.retype} onChange={change} />
    </div>
    </fieldset>
    <div className='d-flex flex-row justify-content-around m-auto w-50'>
      <button className='form-control btn m-3 w-25' style={style.btnPrim} onClick={save1} type="submit">Save</button> 
      <button className='form-control btn m-3 w-25' style={style.btnSec} type="reset" onClick={cleardata}>Reset</button>
      </div>
    </form>
    <form>
    <fieldset className='m-3' style={{width: '75vw'}}>
      <legend className='text-center'>E-mail modification</legend>
      <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end  w-50 p-2' htmlFor="oldemail">Old E-mail: </label>
          <input className='d-flex flex-column form-control w-50' type="email" name="oldemail" id="oldemail" value={data.oldemail} onChange={change} />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end  w-50 p-2' htmlFor="newemail">New E-mail: </label>
          <input className='d-flex flex-column form-control w-50' type="email" name="newemail" id="newemail" value={data.newemail} onChange={change} />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor="password">Password: </label>
          <input className='d-flex flex-column form-control w-50' type="password" name="password" id="password" value={data.password} onChange={change} />
          </div>
          </fieldset>
          <div className='d-flex flex-row justify-content-around m-auto w-50'>
      <button className='form-control btn m-3 w-25' style={style.btnPrim} onClick={save2} type="submit">Save</button> 
      <button className='form-control btn m-3 w-25' style={style.btnSec} type="reset" onClick={cleardata}>Reset</button>
      </div>
    </form>
    <div className='col-3 m-auto'>
    <div className='row m-3'>
    <button className='btn btn-outline-danger' style={{fontWeight:'bolder'}} onClick={logout}>Log out</button></div>
    <div className='row m-3'>
    <button className='btn btn-danger' style={{fontWeight:'bolder'}} onClick={() =>delete_user()}> {<FaTrashAlt/>} Delete account {<FaTrashAlt/>}</button>
    </div></div></div>
  )
}

export default UserSettings