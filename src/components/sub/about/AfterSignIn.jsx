import React from 'react'
import { style } from '../../../const/style'
import About from '../../pages/About'
import trasactions from '../../../pic/afterlogin.png'
import newTransaction from '../../../pic/p_new.png'
import partnerlist from '../../../pic/partnerlist.png'
import settings from '../../../pic/p_s.png'

const AfterSignIn = () => {
  return (
    <div><About/>
    <div style={style.content}>
                <div className='container'>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-row'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={trasactions} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2'>
                                <p>This is the first page you see after log in. On the top there's a from, with that you're able to filter your transactions. You can choose whether you want to see incomes and outcomes too or just one of them. Choose which moth you wanna list. Also you can choose that you want to list the transactions connected only one of your partners.</p>
                                <p>Under this you meet with the summary of your income on the left, your outcome on the right and your balance in the middle.</p>
                                <p>You can come back to this page anytime with clicking on the "water drop" logo on the top left.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row-reverse'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={newTransaction} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2 text-end'>
                                <p>When you click on the "New Transaction" option in the menu on the top, you're gonna see this form where you're able to add a new transacion. You have to give the date, choose the given taxes, type the amount, choose from your partners you already saved. Then describe the entry.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={partnerlist} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2'>
                                <p>
                                    The next menu option gives you the ability to see the list of your partners in the table in the middle. Under the menu there's a form, that makes you able to save new partners. Fill the form with their name, e-mail address, country, postal code, and the rest of their address. Click the "<b>+</b>"!
                                </p>
                                <p>Note: Before adding a new transaction from a new partner you must save the partner first. So you <b>can't</b> save a transaction linked to a partner that doesn't exist in the database yet.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row-reverse'>
                            <div className='w-50 d-flex flex-column m-2'>
                                <img className='w-100' src={settings} alt='' />
                            </div>
                            <div className='w-50 d-flex flex-column m-2 text-end'>
                                <p>
                                    Finally, the button on the top rigth. Here you can find a form to modify some of your user data. With the form on the top you can change your password, to do that you have to give your current password, then the new one, in the end retype to avoid typoes and click on the "Save" button. If you fill the form on the bottom with your current e-mail, with a new one then give your current password, you change your e-mail address linked to your account after clicking on the "Save" button.
                                </p>
                                <p>The "Log out" button also can be found on this page on the bottom.</p>
                            </div>
                        </div>
                        <p className='text-center'>Anytime you have troubes regarding to the usage of this app <a href='/contact'>contact us</a>. ↞ Click here! </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AfterSignIn