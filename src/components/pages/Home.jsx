import React from 'react'
import p_new from "../../pic/p_new.png"
import afterlogin from "../../pic/afterlogin.png"
import partnerlist from "../../pic/partnerlist.png"
import { style } from '../../const/style'

const Home = () => {
  return (
    <div style={style.content}>
      <div className='container'>
      <div className='text-center'>
        <h1>Aquntant</h1>
        <h2>The money flows, we help to keep track on it.</h2>
      </div>
        <div className='d-flex flex-column'>
          <div className='d-flex flex-lg-row flex-sm-column'>
            <div className='w-50 d-flex flex-column m-2'>
              <img className='w-100' src={afterlogin} alt=''/>
            </div>
            <div className='w-50 d-flex flex-column m-2'>
              <h3>Elegant design</h3>
              <ul>
                <li>Color harmony based on shades of blue</li>
                <li>Well-organised and true to the point design</li>
                <li>Streamlined features</li>
              </ul>
              </div>
          </div>
        </div>
        <div className='d-flex flex-lg-row-reverse flex-sm-column'>
          <div className='w-50 d-flex flex-column m-2'>
            <img className='w-100' src={p_new} alt=''/>
          </div>
          <div className='w-50 d-flex flex-column m-2'>
            <h3 className='text-end'>Easy to use</h3>
            <ul>
              <li>Important functions are highlighted with a different color</li>
              <li>Functions are easy and obvious to access</li>
              <li>Learning how to use is a piece of cake</li>
            </ul>
          </div>
        </div>
        <div className='d-flex flex-lg-row flex-sm-column'>
            <div className='w-50 d-flex flex-column m-2'>
              <img className='w-100' src={partnerlist} alt=''/>
            </div>
            <div className='w-50 d-flex flex-column m-2'>
              <h3>Everything in place</h3>
              <ul>
                <li>Obvious layout of the functions and screen elements</li>
                <li>Logical structure</li>
                <li>You'll find what you need where You'd try to find first</li>
              </ul>
              </div>
          </div>
          <p className='text-center'>For more information, please visit <a href='/about'>About</a> page.</p>
        </div>
      </div>
  )
}

export default Home