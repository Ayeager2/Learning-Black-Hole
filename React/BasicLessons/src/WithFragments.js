import React, {Component, Fragment} from 'react';

class WithFragments extends Component{
    render(){
        return(
            <Fragment>
                <h1>With Fragments</h1>
                <p>Doesn't have any unused Dom elements.</p>
            </Fragment>
        );
    }
}

export default WithFragments;