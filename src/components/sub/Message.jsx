import React from 'react'
import { ExclamationCircleFill } from 'react-bootstrap-icons'

const Message = (props) => {
    let feltetel = props.message != ""
    return (
      <p>{feltetel && <ExclamationCircleFill />} {props.message}</p>
    )
  }

  export default Message