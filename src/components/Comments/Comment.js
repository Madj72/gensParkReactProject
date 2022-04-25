
import React, { Component } from 'react';
import {Alert,Spinner} from 'react-bootstrap';
import Button from '../Button.js';


export default class Comment extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        const { user, text } = this.props.c;

        return <div className="threads-page-thread">
            <p>{user}</p>
            <div className="thread-main">
                <img style={{width: 50, height: 50}} src="https://avatars.githubusercontent.com/u/26675844?v=4"/>
                <p>{text}</p>
            </div>
        </div>
    }

}