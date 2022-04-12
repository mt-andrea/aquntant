import React from 'react'
import {style} from '../../const/style'

const NewPartner = () => {
  const hozzaad=()=>{

  }
  return (
    <div style={style.strip_form}>
      <form>
        <fieldset className='d-flex flex-row justify-content-between'>
        <h3>Partner data: </h3>
        <div className='d-flex flex-column'>
            <label htmlFor='name'>Name </label>
            <input className='form-control form-control-sm' id='name' type={'text'}/>
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='email'>E-mail </label>
            <input className='form-control form-control-sm' id='email' type={'email'}/>
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='country'>Country </label>
            <input className='form-control form-control-sm' id='country' type={'text'}/>
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='postal_code'>Postal code </label>
            <input className='form-control form-control-sm' id='postal_code' type={'text'}/>
          </div>
          <div className='d-flex flex-column'>
            <label htmlFor='address'>Street and house number </label>
            <input className='form-control form-control-sm' type={'text'}/>
          </div>
          <button style={style.btnPlus} onClick={hozzaad} type="submit">+</button>
        </fieldset>
      </form>
    </div>
  )
}

export default NewPartner