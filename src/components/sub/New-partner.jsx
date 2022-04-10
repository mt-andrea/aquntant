import React from 'react'

const NewPartner = () => {
  return (
    <div>
      <form>
        <fieldset>
        <legend>Partner data: </legend>
        <div>
            <label htmlFor='name'>Name </label>
            <input id='name' type={'text'}/>
          </div>
          <div>
            <label htmlFor='email'>E-mail </label>
            <input id='email' type={'email'}/>
          </div>
          <div>
            <label htmlFor='country'>Country </label>
            <input id='country' type={'text'}/>
          </div>
          <div>
            <label htmlFor='postal_code'>Postal code </label>
            <input id='postal_code' type={'text'}/>
          </div>
          <div>
            <label htmlFor='address'>Street and house number </label>
            <input type={'text'}/>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export default NewPartner