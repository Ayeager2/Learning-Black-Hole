import React, { Component } from 'react';
import { render } from 'react-dom';

const enabled = false;
const text = 'A Button';
const placeholder = 'input value...';
const size = 50;
render(
  <section>
    <button disabled={!enabled}>{text}</button>
    <input placeholder={placeholder} size={size}></input>
  </section>,
  document.getElementById('root')
);

