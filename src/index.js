import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Panel, Children, MovieBrowser, SomeComponent} from './Children'

const MOUNT0 = document.querySelector('#section0')
const MOUNT1 = document.querySelector('#section1')
const MOUNT2 = document.querySelector('#section2')
const MOUNT3 = document.querySelector('#section3')
const MOUNT4 = document.querySelector('#section4')
const MOUNT5 = document.querySelector('#section5')
const MOUNT6 = document.querySelector('#section6')

ReactDOM.render(
  <App 
  />, 
  MOUNT0
);

ReactDOM.render(
  <Panel 
    title="My Red Dog"
  />, 
  MOUNT1
);

ReactDOM.render(
  <Children
  />, 
  MOUNT2
);

ReactDOM.render(
  <MovieBrowser
    title="Browse for movies"
  />, 
  MOUNT3
);

ReactDOM.render(
  <SomeComponent 
    
  />, 
  MOUNT4
);