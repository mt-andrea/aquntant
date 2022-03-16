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
    <App/>,

    document.getElementById('root')
);