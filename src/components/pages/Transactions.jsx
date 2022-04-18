import React, { useEffect, useState } from 'react'
import {style} from '../../const/style'
import Filter from '../sub/Filter'

const Transactions = () => {

  const [information, setInformation] = useState({})
  const url ='http://localhost:4000/listing'
  const url2 ='http://localhost:4000/listing/filtered'
  const url3 ='http://localhost:4000/summary'
  const token = 'Bearer: '+sessionStorage.token


  
  const [data, setData] = useState({
    in_out: "0",
    month: "0",
    partner: "0"
})

const [summa, setSumma] = useState({
  negativ: 0,
  pozitiv: 0
})


function change(e) {
  const { name, value } = e.target
  setData({
      ...data,
      [name]: value
  })
}
  function readIn() {
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((response) => response.json())
    .then((json) => setInformation(json))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    summary()
    readIn();
  }, []);

  useEffect(() => { //I don't know why, but this one solved the "no button" problem
    
    filtering() 
  },[data.in_out, data.month, data.partner])

  function filtering() {
    //e.preventDefault()
    fetch(url2, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "in_out": data.in_out,
        "month": data.month,
        "partner": data.partner
      })
      
    })
    .then((response) => response.json())
    .then((json) => setInformation(json))
    .catch(err => console.log(err))
  }

  function summary() {
    fetch(url3, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-type': 'application/json;charset=utf-8'
      }
      
    })
    .then((response) => response.json())
    .then((json) => setSumma(json))
    .catch(err => console.log(err))
  }
  

  return (
    <div  style={style.content}>
    <div className='container' >
      <Filter change={change} filtering={filtering} data={data} />
      <div className='row'>
      <div className='col'><p>Income: {summa.length>0 && (summa[0].pozitiv)}</p></div>
      <div className='col'><p>Balance: {summa.length>0 && (summa[0].negativ+summa[0].pozitiv)}</p></div>
      <div className='col'><p>Outcome: {summa.length>0 && (summa[0].negativ)}</p></div>
      </div>
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
      {information && information.length>0 && information.map(
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

export default Transactions