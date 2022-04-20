
import React, { Component } from 'react';
import {Alert,Spinner} from 'react-bootstrap';



export default class ThreadsPageThread extends React.Component {

    render(){
        const { id, desc, username } = this.props.thread;

        return <div className="threads-page-thread">
            <div className="thread-main">
                <img style={{width: 50, height: 50}} src="https://avatars.githubusercontent.com/u/26675844?v=4"/>
                <p>{desc}</p>
            </div>
            <p>{username}</p>
        </div>
    }

}