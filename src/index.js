import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import bootstrap from 'bootstrap'
const { JSDOM } = require("jsdom");
const { window } = new JSDOM("");
const $ = require("jquery")(window);
const Chart = require('chart.js');

ReactDOM.render( < App /> ,

    document.getElementById('root')
);