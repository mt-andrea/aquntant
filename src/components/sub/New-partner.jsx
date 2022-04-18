import React, {useState} from 'react'
import {style} from '../../const/style'
import Message from './Message'


const NewPartner = (props) => {
  const token ="Bearer: "+sessionStorage.token
  const [data, setData] = useState({
    name: "",
    email: "",
    country: "",
    postal_code: "",
    address: ""
})
const [message, setMessage] = useState("")

function change(e) {
  const { name, value } = e.target
  setData({
      ...data,
      [name]: value
  })
}
  function hozzaad(e){
    e.preventDefault()
    if (data.name=="" || data.email=="" || data.postal_code=="" || data.country=="" || data.address=="") {
      setMessage("One of the input fields is empty!")
      return
  }

    fetch('http://localhost:4000/add/partner', {
      method: 'POST',
      headers: {
          'Authorization': token,
          'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          "name": data.name,
          "email": data.email,
          "country": data.country,
          "postal_code": data.postal_code,
          "address": data.address
      })
  })
      .then((response) => response.json())
      .then(props.updateList)
      .catch(err => console.log(err))
  }
  return (
    <div className=' p-1' style={style.strip_form}>
      <form>
        <fieldset className='row m-2'>
        <h3>Partner data: </h3>
        {<Message style={style.message} message={message}/>}
        <div className='col-lg-2'>
            <label htmlFor='name'>Name </label>
            <input className='form-control form-control-sm' id='name' name='name' type={'text'} value={data.name} onChange={change}/>
          </div>
          <div className='col-lg-2'>
            <label htmlFor='email'>E-mail </label>
            <input className='form-control form-control-sm' id='email' name='email' type={'email'} value={data.email} onChange={change}/>
          </div>
          <div className='col-lg-2'>
            <label htmlFor='country'>Country </label>
            <input className='form-control form-control-sm' id='country' name='country' type={'text'} value={data.country} onChange={change}/>
          </div>
          <div className='col-lg-2'>
            <label htmlFor='postal_code'>Postal code </label>
            <input className='form-control form-control-sm' id='postal_code' name='postal_code' type={'text'} value={data.postal_code} onChange={change}/>
          </div>
          <div className='col-lg-3'>
            <label htmlFor='address'>Street and house number </label>
            <input className='form-control form-control-sm' id='address' name='address' type={'text'} value={data.address} onChange={change}/>
          </div>
          <div className='col-lg-1 text-lg-end text-sm-center'>
          <button style={style.btnPlus} onClick={hozzaad} type="submit">+</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default NewPartner