import React from 'react'
import About from '../../pages/About'
import step1 from '../../../pic/signin1.png'
import step2 from '../../../pic/signin2-3.png'
import success from '../../../pic/afterlogin.png'
import { style } from '../../../const/style'

const SinIn = () => {
    return (
        <div>
            <About />
            <div style={style.content}>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-lg-row flex-sm-column'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={step1} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2'>
                                <p>
                                    Step no. 1: After registration, if you can see this page, you can Sign In. So click on the "Sign In" button on the top right.
                                </p>
                                <p>Note: If you already have an account, you don't have to reregister. Without signing in you're always able to find this button at the same place when you visit the site.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-lg-row flex-sm-column'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={step2} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2'>
                                <p>
                                    Step no. 2: Fill the form.
                                    <ul>
                                        <li>use the name you gave to your account</li>
                                        <li>write the password you added during registration</li>
                                    </ul>
                                </p>
                                <p>Step no. 3: Click the "Sign In" button.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-lg-row flex-sm-column'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={success} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2'>
                                <p>
                                    If you can see this page, now you're able to do all sort of things that we'll explain on the <a href='/about/aftersignin'>After Sign In</a> page in detail.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinIn