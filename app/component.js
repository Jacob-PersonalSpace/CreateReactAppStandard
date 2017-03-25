import React from 'react';
import './css/index.less';
import bg from './img/bg.png';

class Hello extends React.Component{
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h1>hehe</h1>
                <img src={ bg } alt="logo" />
            </div>
        );
    }
};

export default Hello;