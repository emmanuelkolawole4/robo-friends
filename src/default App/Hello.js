import React, { Component } from 'react';
import './Hello.css';

// class Hello extends Component {
//     render() {
//         return (
//             <div className='f1 tc'>
//                 <h3>Hello World!</h3>
//                 <p>{ this.props.greeting }</p>
//             </div>
//         );
//     }
// }

// writing a class like above or writing a function like below is the same

const Hello = (props) => {
    return (
        <div className='f1 tc'>
            <h3>Hello World!</h3>
            <p>{ props.greeting }</p>
        </div>
    );
}
export default Hello;