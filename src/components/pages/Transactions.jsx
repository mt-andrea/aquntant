import React, { useEffect, useState } from 'react'
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
    <div>
      <Filter/>
      <div>{information && information.length>0 && information.map((item)=><p>{item.amount}</p>)}</div>
    </div>
  )
}

export default Transactions