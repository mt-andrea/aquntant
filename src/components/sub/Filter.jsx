import React, {useState, useEffect} from 'react'
import {style} from '../../const/style'

const Filter = (props) => {
    const token = 'Bearer: '+sessionStorage.token
    const url3 = 'http://localhost:4000/choices/partner'

    const [partners, setPartners] = useState({
        partner: ""
    })

    useEffect(() => {
        partners_list();
      }, []);

    function partners_list() {
        //e.preventDefault()
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
        <div className=' h-auto' style={style.strip_form}>
            <form>
                <fieldset className='row m-2'>
                    <div className='col-lg-4'>
                        <label  htmlFor='in_out'>In-/Outcome </label>
                        <select className='form-control p-1' id='in_out' name='in_out'  value={props.data.in_out} onChange={props.change} >
                            <option value={'0'}>-- Select --</option>
                            <option value={'-'}>Outcome</option>
                            <option value={'+'}>Income</option>
                        </select>
                    </div>
                    <div className='col-lg-4'>
                        <label  htmlFor='month'>Month</label>
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
                    <div className='col-lg-4'>
                        <label  htmlFor='partner'>Partner</label>
                        <select className='form-control p-1' id='partner' name='partner' value={props.data.partner} onChange={props.change}>
                            <option value={'0'} selected>-- Select --</option>
                            {partners && partners.length>0 && partners.map(
                                (item)=>
                                <option value={item.name}>{item.name}</option>
                                )}
                        </select>
                    </div>
                    
                </fieldset>
            </form>
        </div>
    )
}

export default Filter