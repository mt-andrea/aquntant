import React, { useEffect, useState } from 'react'
import style from '../../const/style'
import Filter from '../sub/Filter'

const Transactions = () => {

  const [information, setInformation] = useState({})
  const url ='http://localhost:4000/listing'
  const url2 ='http://localhost:4000/listing/filtered'
  const token = 'Bearer: '+sessionStorage.token

  const [data, setData] = useState({
    in_out: "0",
    month: "0"
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
    readIn();
    console.log(information)
  }, []);

  function filtering(e) {
    e.preventDefault()
    fetch(url2, {
      method: 'POST',
      headers: {
        'Authorization': token,
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "in_out": data.in_out,
        "month": data.month
      })
      
    })
    .then((response) => response.json())
    .then((json) => setInformation(json))
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex flex-column align-items-center' style={style.content}>
      <Filter change={change} filtering={filtering} data={data}/>
      <table className='table table-striped table-hover m-2 w-75'>{information && information.length>0 && information.map(
        (item)=>
        <tr>
        <td>{item.name}</td>
        <td>{item.date}</td>
        <td>{item.amount}</td>
        <td>{item.comment}</td>
        </tr>)}</table>
    </div>
  )
}

export default Transactions