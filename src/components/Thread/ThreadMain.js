
import React, { Component } from 'react';
import {Alert,Spinner} from 'react-bootstrap';
import Button from '../Button.js';


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
        const { desc, username } = this.props.thread;

        return <div className="threads-page-thread">
            <div className="thread-main">
                <img style={{width: 50, height: 50}} src="https://avatars.githubusercontent.com/u/26675844?v=4"/>
                <p>{desc}</p>
            </div>
            <p>{username}</p>
            <a href="/threads" className='register-button'>Back</a> {/* TODO implement in-browser back button */}
        </div>
    }

}