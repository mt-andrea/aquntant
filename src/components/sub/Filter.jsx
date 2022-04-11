import React from 'react'
import style from '../../const/style'

const Filter = (props) => {
  
   
    return (
        <div style={style.strip_form}>
            <form>
                <fieldset className='d-flex flex-md-row justify-content-evenly m-2'>
                    <div className='d-flex flex-row align-items-center w-25'>
                        <label className='m-2' htmlFor='in_out'>Income/Outcome </label>
                        <select className='form-control p-1' id='in_out' name='in_out'  value={props.data.in_out} onChange={props.change} >
                            <option value={'0'}>-- Select --</option>
                            <option value={'-'}>Outcome</option>
                            <option value={'+'}>Income</option>
                        </select>
                    </div>
                    <div className='d-flex flex-row align-items-center w-25'>
                        <label className='m-2' htmlFor='month'>Month</label>
                        <select className='form-control p-1' id='month' name='month'  value={props.data.month} onChange={props.change}>
                            <option value={'0'}>-- Select --</option>
                            <option value={'01'}>January</option>
                            <option value={'02'}>February</option>
                            <option value={'03'}>March</option>
                            <option value={'04'}>April</option>
                            <option value={'05'}>May</option>
                            <option value={'06'}>June</option>
                            <option value={'07'}>July</option>
                            <option value={'08'}>August</option>
                            <option value={'09'}>September</option>
                            <option value={'10'}>October</option>
                            <option value={'11'}>November</option>
                            <option value={'12'}>December</option>
                        </select>
                    </div>
                    <div className='d-flex flex-row align-items-center w-25'>
                        <label className='m-2' htmlFor='partner'>Partner</label>
                        <select className='form-control p-1' id='partner'>
                            <option value={'0'}>-- Select --</option>

                        </select>
                    </div>
                    <button className='form-control w-auto btn mx-2' style={style.btnPrim} onClick={props.filtering}>Filter</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Filter