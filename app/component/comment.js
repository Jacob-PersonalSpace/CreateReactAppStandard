import React, { Component } from 'react';
import { Button, Glyphicon, Media, Panel, ListGroup, ListGroupItem, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import '../css/bootstrap.min.css';
import '../css/bootstrap-theme.min.css';
import bg from '../img/bg.png'
import fetch from 'node-fetch';
import Pusher from 'pusher-js';

class Comment extends Component{
    constructor() {
        super();

        this.state = {
            name: "",
            comment: "",
            commentList: [],
        };
    }

    componentWillMount() {
        this.pusher = new Pusher('235fe40f2b7ff3ad0a37', {
            cluster: 'ap1',
            encrypted: true
        });

        this.channel = this.pusher.subscribe('flash-comments');
    }

    componentDidMount() {
        var that = this;
        this.channel.bind('new-comment', function(data) {
            var commentObject = {
                name: data.name,
                imageUrl: data.imageUrl,
                comment: data.comment,
            }

            that.state.commentList.push(commentObject);

            that.setState({
                commentList: that.state.commentList,
            });
        });
    }

    componentWillUnmount() {
        this.channel.unbind();
        this.pusher.unsubscribe(this.channel);
    }

    getClick() {
        // var that = this;
        fetch('http://localhost:4000/comment',{
            method: 'GET',
            mode: 'cors',
            // body: JSON.stringify({name: input.value}),
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log('----call API successfully----');
            console.log(data.message);
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    postClick () {
        if (this.state.name === '')
        {
            alert('input your name first');
        }
        else if (this.state.comment === '')
        {
            alert('input your comment first');
        }

        var that = this;
        // var data = new FormData();
        // data.append('json', JSON.stringify({ name: this.state.name, comment: this.state.comment }));

        fetch('http://localhost:4000/comment',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            mode: 'cors',
            body: JSON.stringify({ name: this.state.name, comment: this.state.comment }),
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(JSON.stringify(data));
        })
        .catch(function(err) {
            console.log(err);
        });
    }

    nameInputChange(e) {
        this.setState({ name: e.target.value });
    }

    commentInputChange(e) {
        this.setState({ comment: e.target.value });
    }

    render() {
        return (
            <div>
                <br />
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Name</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Input your name." value={ this.state.name } onChange={ this.nameInputChange.bind(this) } />
                    </FormGroup>
                    {' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>comment</ControlLabel>
                        {' '}
                        <FormControl type="text" placeholder="Write comment here." value={ this.state.comment } onChange={ this.commentInputChange.bind(this) } />
                    </FormGroup>
                    {' '}
                    <Button onClick={ this.postClick.bind(this) }>submit</Button>
                </Form>
                <br />
                <Panel collapsible defaultExpanded header="Comments">
                    <ListGroup fill>
                        {
                            this.state.commentList.map((data, index) => {
                                return (
                                    <ListGroupItem key={ index + 'listgroupitem' }>  
                                        <Media key={ index + 'media' }>
                                            <Media.Left align="top" key={ index + 'medialeft' }>
                                                <img width={64} height={64} src={ bg } alt="Image" key={ index + 'img' }/>
                                            </Media.Left>
                                            <Media.Body key={ index + 'mediabody' }>
                                                <Media.Heading key={ index + 'mediaheading' }>{ data.name }</Media.Heading>
                                                <p key={ index + 'p' }>{ data.comment }</p>
                                            </Media.Body>
                                        </Media>
                                    </ListGroupItem>
                                );
                            })
                        }
                    </ListGroup>
                </Panel>
            </div>
        );
    }
};

export default Comment;