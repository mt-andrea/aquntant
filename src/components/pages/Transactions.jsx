import React, { useEffect, useState } from 'react'

const Transactions = (props) => {

  const [dataz, setDataz] = useState({})
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
    .then((json) => setDataz(json))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    readIn();
  }, []);

  return (
    <div>{dataz && dataz.length>0 && dataz.map((item)=><p>{item.amount}</p>)}</div>
  )
}

export default Transactions