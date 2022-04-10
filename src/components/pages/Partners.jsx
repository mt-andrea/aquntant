import React from 'react'
import style from '../../const/style'
import NewPartner from '../sub/New-partner'

const Partners = () => {
  return (
    <div className='d-flex flex-column align-items-center' style={style.content}>
      <NewPartner />
    </div>
  )
}

export default Partners