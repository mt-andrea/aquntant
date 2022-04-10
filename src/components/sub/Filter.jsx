import React from 'react'

const Filter = () => {
  return (
    <div>
        <form>
            <fieldset>
                <div>
                    <label htmlFor='in_out'>Income/Outcome </label>
                    <select id='in_out'>
                        <option value={'-'}>Outcome</option>
                        <option value={'+'}>Income</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='month'>Month</label>
                    <select id='month'>
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
                <div>
                    <label htmlFor='partner'>Partner</label>
                </div>
            </fieldset>
        </form>
    </div>
  )
}

export default Filter