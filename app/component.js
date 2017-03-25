import React from 'react';
import { Button } from 'react-bootstrap';
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';

class Hello extends React.Component{
    render() {
        return (
            <div>
                <Button bsStyle="primary">Primary</Button>
            </div>
        );
    }
};

export default Hello;