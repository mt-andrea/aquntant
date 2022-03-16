import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Transactions from './components/pages/Transactions';
import New from './components/pages/New';
import Partners from './components/pages/Partners';
import Order from './components/pages/Order';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/Sign-up';
import SignIn from './components/pages/Sign-in';

ReactDOM.render(
    <Router>
        < App />
        <Routes>
          <Route path='/transactions' exact element={<Transactions/>} />
          <Route path='/new' element={<New/>} />
          <Route path='/partners' element={<Partners/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path='/sign-in' element={<SignIn/>} />
        </Routes>
    </Router>,

    document.getElementById('root')
);