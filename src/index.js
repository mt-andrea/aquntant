import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import bootstrap from 'bootstrap'
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const Chart = require('chart.js');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


