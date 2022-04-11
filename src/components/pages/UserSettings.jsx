import React from 'react'
import style from '../../const/style'

const UserSettings = () => {
  return (
    <div style={style.content}>
    <form>
    <fieldset className='m-3' style={{width: '50vw'}}>
    <legend className='text-center'>Password modification</legend>
    <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="oldpassword">Old Password: </label>
          <input className='d-flex flex-column form-control w-50' type="password" name="oldpassword" id="oldpassword" value={data.oldpassword} onChange={change} />
          </div>
    <div className='d-flex flex-md-row justify-content-evenly m-2'> 
    <label className='d-flex flex-column align-items-end w-25' htmlFor="newpassword">New password: </label>
    <input className='d-flex flex-column form-control w-50' type="password" name="newpassword" id="newpassword" value={data.newpassword} onChange={change} />
    </div>
    <div className='d-flex flex-md-row justify-content-evenly m-2'> 
    <label className='d-flex flex-column align-items-end w-25' htmlFor="retype">Retype New Password: </label>
    <input className='d-flex flex-column form-control w-50' type="password" name="retype" id="retype" value={data.repassword} onChange={change} />
    </div>
    </fieldset>
    <div className='d-flex flex-row justify-content-around'>
      <button className='form-control btn m-3' style={style.btnPrim} onClick={save} type="submit">Save</button> 
      <button className='form-control btn m-3' style={style.btnSec} type="reset">Reset</button>
      </div>
    </form>
    <form>
    <fieldset className='m-3' style={{width: '50vw'}}>
      <legend className='text-center'>E-mail modification</legend>
      <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="oldemail">Old E-mail: </label>
          <input className='d-flex flex-column form-control w-50' type="email" name="oldemail" id="oldemail" value={data.oldemail} onChange={change} />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="newemail">New E-mail: </label>
          <input className='d-flex flex-column form-control w-50' type="email" name="newemail" id="newemail" value={data.newemail} onChange={change} />
          </div>
          <div className='d-flex flex-md-row justify-content-evenly m-2'> 
          <label className='d-flex flex-column align-items-end w-25' htmlFor="password">Password: </label>
          <input className='d-flex flex-column form-control w-50' type="password" name="password" id="password" value={data.password} onChange={change} />
          </div>
          </fieldset>
          <div className='d-flex flex-row justify-content-around'>
      <button className='form-control btn m-3' style={style.btnPrim} onClick={save} type="submit">Save</button> 
      <button className='form-control btn m-3' style={style.btnSec} type="reset">Reset</button>
      </div>
    </form>
    </div>
  )
}

export default UserSettings