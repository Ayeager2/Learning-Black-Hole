import React from 'react';
import {render} from 'react-dom';
import MyComponent from './MyComponent';
 render(
  <MyComponent>
    <MyComponent.First></MyComponent.First>
    <MyComponent.Second></MyComponent.Second> 
  </MyComponent>,
  document.getElementById('root') 
); 