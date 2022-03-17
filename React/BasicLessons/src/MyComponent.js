import React, { Component } from 'react';

export default class MyComponent extends Component {
    state={
        heading: 'React Awesomesause (Busy)',
        content: 'Loading...'
    };
    render(){
        const {heading, content} = this.state;

        return(
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        );
    }
}
