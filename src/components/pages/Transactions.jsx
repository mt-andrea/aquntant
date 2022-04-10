import React, { useEffect, useState } from 'react'
import style from '../../const/style'
import Filter from '../sub/Filter'

const Transactions = () => {

  const [information, setInformation] = useState({})
  const url ='http://localhost:4000/listing'
  const token = 'Bearer: '+sessionStorage.token

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
  }, []);

  return (
    <div className='d-flex flex-column align-items-center' style={style.content}>
      <Filter/>
      <table className='table table-striped table-hover'>{information && information.length>0 && information.map(
        (item)=>
        <tr>
        <td>{item.date}</td>
        <td>{item.amount}</td>
        <td>{item.comment}</td>
        </tr>)}</table>
    </div>
  )
}

export default Transactions