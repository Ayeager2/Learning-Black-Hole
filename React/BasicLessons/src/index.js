import React from 'react';
import {render as renderJSX} from 'react-dom'
import MyButton from './MyButton';



function render({first, second}){
  renderJSX(
    <main>
      <MyButton text={first.text} disabled={first.disabled}/>
      <MyButton text={second.text} disabled={second.disabled}/>
    </main>,
    document.getElementById('root')
  );
}

render({
  first: {
    text: "first button",
    disabled: false
  },
  second: {
    text:'second button',
    disabled: true
  }
});


