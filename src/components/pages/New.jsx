import React, { useEffect, useState } from 'react'
import { style } from '../../const/style';
import Message from '../sub/Message';

const New = () => {
  const url = 'http://localhost:4000/choices/tax'
  const [tax, settax] = useState({})
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
  const token = 'Bearer: ' + sessionStorage.token
  const url3 = 'http://localhost:4000/choices/partner'

  const [partners, setPartners] = useState({})

  useEffect(() => {
    partners_list();
  }, []);

  function partners_list() {
    fetch(url3, {
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
  return (
    <div style={style.content}>
      <form>
        <fieldset style={{ width: '75vw'}}>
          <legend className='text-center'>Transaction data</legend>
          {<Message style={style.message} />}
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor='date'>Date: </label>
            <input className='form-control p-1' id='date' name='date' type={'date'} />
            </div>
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor='tax'>Tax: </label>
            <select id='tax' name='tax' className='form-control p-1'>
              <option selected disabled>-- Select --</option>
              {tax && tax.length > 0 && tax.map(
                (item) =>
                  <option value={item.percent}>{item.name} - {item.percent}%</option>
              )}
            </select>
            </div>
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor='amount'>Amount: </label>
            <input className='form-control p-1' id='amount' name='amount' type={'number'} />
            </div>
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label  className='d-flex flex-column align-items-end w-50 p-2' htmlFor='partner'>Partner: </label>
            <select className='form-control p-1' id='partner' name='partner'>
              <option selected disabled>-- Select --</option>
              {partners && partners.length > 0 && partners.map(
                (item) =>
                  <option value={item.name}>{item.name}</option>
              )}
            </select>
            </div>
          <div className='d-flex flex-row justify-content-evenly m-2'>
            <label className='d-flex flex-column align-items-end w-50 p-2' htmlFor='comment'>Comment: </label>
            <textarea className='form-control p-1'  id='comment' name='comment'/>
            </div>
        </fieldset>
        <div className='d-flex flex-row justify-content-around m-auto w-50'>
      <button className='form-control btn m-3 w-25' style={style.btnPrim} type="submit">Save</button> 
      <button className='form-control btn m-3 w-25' style={style.btnSec} type="reset">Reset</button>
      </div>
      </form>
    </div>
  )
}

export default New