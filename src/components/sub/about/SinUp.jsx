import React from 'react'
import { style } from '../../../const/style'
import About from '../../pages/About'
import step1 from '../../../pic/signup1.png'
import step2 from '../../../pic/signup2-3.png'
import success from '../../../pic/signin1.png'

const SinUp = () => {
    return (
        <div><About />
            <div style={style.content}>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-row'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={step1} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2'>
                            <p>
                                Step no. 1: Please click on the "Sign Up" menu option on the top.
                            </p>
                            </div>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={step2} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2'>
                            <p>
                                Step no. 2: Fill the form.
                                <ul>
                                    <li>give a name to your account</li>
                                    <li>use an e-mail address that can be used to communicate with you</li>
                                    <li>use a secure password</li>
                                    <li>pease retype your password just to comfirm there's no typo in it</li>
                                </ul>
                            </p>
                            <p>Step no. 3: Click the "Register" button.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={success} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2'>
                            <p>
                                If you can see this page, you can Sign In. So click on the "Sign In" button on the top right.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinUp