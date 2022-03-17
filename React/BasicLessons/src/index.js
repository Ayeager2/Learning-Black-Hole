import React, { Component } from 'react';
import { render } from 'react-dom';

import MyButton from './MyButton';
import MySection from './MySection';

class MyComponent extends Component {
 render() {
 return (
 <MySection>
   <MyButton>My Button Text</MyButton>
   </MySection>
   
 );
 }
}
render(<MyComponent />, document.getElementById('root'));
