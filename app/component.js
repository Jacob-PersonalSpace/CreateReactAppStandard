import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './css/bootstrap.min.css';
import './css/bootstrap-theme.min.css';

class Hello extends React.Component{
    render() {
        return (
            <div>
                <Button bsStyle="primary">Primary</Button>
                <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
            </div>
        );
    }
};

export default Hello;