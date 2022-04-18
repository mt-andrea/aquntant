import React, { useEffect, useState } from 'react'
import { style } from '../../const/style';
import Message from '../sub/Message';

const New = () => {
  const url = 'http://localhost:4000/choices/tax'
  const url2 = 'http://localhost:4000/choices/partner'
  const url3 = 'http://localhost:4000/add/transaction'
  const [tax, settax] = useState({})
  const [message, setMessage] = useState("")
  const token = 'Bearer: ' + sessionStorage.token
  const [data, setData] = useState({
    date: "",
    taxid: "",
    amount: "",
    partnerid: "",
    comment:""
})
const [recent, setRecent] = useState([])

function change(e) {
  const { name, value } = e.target
  setData({
      ...data,
      [name]: value
  })
}
  const [partners, setPartners] = useState({})
  useEffect(() => {
    tax_list();
  }, []);

  function tax_list() {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      }
    })
      .then((response) => response.json())
      .then(json => settax(json))
      .catch(err => console.log(err))
  }

  function cleardata() {
    setData({
      date: "",
      taxid: "",
      amount: "",
      partnerid: "",
      comment:""
    })
  }

  
  useEffect(() => {
    partners_list();
  }, []);

  function partners_list() {
    fetch(url2, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-type': 'application/json;charset=utf-8'
      }
    })
      .then((response) => response.json())
      .then(json => setPartners(json))
      .catch(err => console.log(err))
  }

  function addTransaction(e) {
    e.preventDefault()
    if(data.date=="" || data.taxid=="" || data.amount=="" || data.partnerid=="" || data.comment=="") {
      setMessage("Please fill every input field!")
      return
    }
    fetch(url3, {
          method: 'POST',
          headers: {
            'Authorization': token,
              'Content-type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
              "date": data.date,
              "taxid": data.taxid,
              "amount": data.amount,
              "partnerid": data.partnerid,
              "comment": data.comment
          })
      })
          .then((response) => response.json())
          .then(setMessage("Transaction added"))
          .then(cleardata())
          .then(setRecent([...recent,data]))
          .catch(err => console.log(err))
  }
  
  return (
    <div style={style.content}>
    <div className='container' >
      <form>
        <fieldset style={{ width: '75vw'}}>
          <legend className='text-center'>Transaction data</legend>
          {<Message message={message} />}
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor='date'>Date: </label>
            <input className='form-control p-1' id='date' name='date' type={'date'} onChange={change} value={data.date} />
            </div>
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor='tax'>Tax: </label>
            <select id='tax' name='taxid' className='form-control p-1' value={data.taxid} onChange={change}>
              <option selected >-- Select --</option>
              {tax && tax.length > 0 && tax.map(
                (item) =>
                  <option value={item.id}>{item.name} - {item.percent}%</option>
              )}
            </select>
            </div>
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor='amount'>Amount: </label>
            <input className='form-control p-1' id='amount' name='amount' type={'number'} onChange={change} value={data.amount} />
            </div>
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label  className='d-flex flex-column align-items-end w-50 p-2' htmlFor='partner'>Partner: </label>
            <select className='form-control p-1' id='partner' name='partnerid' value={data.partnerid} onChange={change} >
              <option selected >-- Select --</option>
              {partners && partners.length > 0 && partners.map(
                (item) =>
                  <option value={item.id}>{item.name}</option>
              )}
            </select>
            </div>
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor='comment'>Comment: </label>
            <textarea className='form-control p-1'  id='comment' name='comment' onChange={change} value={data.comment} />
            </div>
        </fieldset>
        <div className='d-flex flex-row justify-content-around m-auto w-50'>
      <button className='form-control btn m-3 w-25' style={style.btnPrim} type="submit" onClick={addTransaction}>Save</button> 
      <button className='form-control btn m-3 w-25' style={style.btnSec} type="reset" onClick={cleardata}>Reset</button>
      </div>
      </form>
<p>Recently added:</p>
<table className='table table-striped table-hover m-2'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Partner</th>
          <th>Tax</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
      {recent && recent.length>0 && recent.map(
        (item)=>
        <tr>
        <td>{item.date}</td>
        <td>{item.amount}</td>
        <td>{item.name}</td>
        <td>{item.tax}</td>
        <td>{item.comment}</td>
        </tr>)}</tbody>
        </table>
    </div></div>
  )
}

export default New