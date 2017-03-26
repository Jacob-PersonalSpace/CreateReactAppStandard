import React from 'react';
import { Button, Glyphicon, Media, Panel, ListGroup, ListGroupItem, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import '../css/bootstrap.min.css';
import '../css/bootstrap-theme.min.css';
import bg from '../img/bg.png'

class Comment extends React.Component{
    render() {
        return (
            <div>
                <br />
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Input your name." />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>comment</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Write comment here." />
                    </FormGroup>
                    {' '}
                    <Button type="submit">submit</Button>
                </Form>
                <br />
                <Panel collapsible defaultExpanded header="Panel heading">
                    Some default panel content here.
                    <ListGroup fill>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                        <ListGroupItem>&hellip;</ListGroupItem>
                    </ListGroup>
                    Some more panel content here.
                </Panel>
                <Media>
                    <Media.Left align="top">
                        <img width={64} height={64} src={ bg } alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>Top aligned media</Media.Heading>
                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                        <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </Media.Body>
                </Media>
            </div>
        );
    }
};

export default Comment;