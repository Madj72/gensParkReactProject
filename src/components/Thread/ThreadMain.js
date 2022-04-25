
import React, { Component } from 'react';
import {Alert,Spinner} from 'react-bootstrap';
import Button from '../Button.js';
import threads from '../../dummy-data/threads.js';
import comments from '../../dummy-data/comments.js';
import Comment from '../Comments/Comment.js';

export default class ThreadMain extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick.bind(this);
    }

    handleClick = (mode, t) => {
        // Simply call the setStateOfParent function from 
        // prop and pass required argument
        this.props.setStateOfParent(mode,t);
    }

    render(){
        const { desc, username } = threads.threads[this.props.id];
        const thread_comments = comments.comments[this.props.id];

        let c = [];
        thread_comments.comments.forEach(element => {
            c.push(<Comment c={element}/>)
        });

        return <div className="threads-page-thread">
            <p>{username}</p>
            <div className="thread-main">
                <img style={{width: 50, height: 50}} src="https://avatars.githubusercontent.com/u/26675844?v=4"/>
                <p>{desc}</p>
            </div>
            <a href="/threads" className='register-button'>Back</a> {/* TODO implement in-browser back button */}
            <div className="comments-main">
                {c}
            </div>
        </div>
    }

}