import React, { Component } from 'react';

export default class MyComponent extends Component {
    state = {
        first: 'Loading',
        second: 'Loading.',
        third: 'Loading..',
        fourth: 'Loading...',
        doneMessage: 'finished!',


    };
    render() {
        const { state } = this;

        return (
           <ul>
               {Object.keys(state)
               .filter(key=> key !== 'doneMessage')
               .map(key => (
                   <li key={key}>
                      <strong>{key}: </strong>
                      {state[key]}
                   </li>
               ))}
           </ul>
        );
    }
}
