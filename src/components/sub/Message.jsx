import React from 'react'
import { ExclamationCircleFill } from 'react-bootstrap-icons'
import { style } from '../../const/style'

const Message = (props) => {
    let feltetel = props.message != ""
    return (
      <p style={style.message}>{feltetel && <ExclamationCircleFill />} {props.message}</p>
    )
  }

  export default Message