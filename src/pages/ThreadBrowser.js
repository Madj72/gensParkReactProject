import react,{useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../redux/authActions';
import '../css/threadspage.css';
import {userLogin} from '../api/authenticationService';
import {Alert,Spinner} from 'react-bootstrap';
import threads from '../dummy-data/threads.js';
import ThreadsPageClass from '../components/ThreadsPage/ThreadsPageClass.js';
import React from 'react';
import ThreadMain from '../components/Thread/ThreadMain';

export default class ThreadsBrowser extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            selectedTab: '',
            thread: -1,
        }
        this.setStateOfParent = this.setStateOfParent.bind(this);
    }

    // Creating below function to set state 
    // of this (parent) component.
    setStateOfParent = (mode, t) => {
        let threads_list = threads.threads;
        this.setState(
            {
                mode: mode,
                thread: threads_list[t]
            }
        );
    }

    selectedTab = () => {
        switch(this.state.mode){
            case 'browse':
                return <ThreadsPageClass setStateOfParent={this.setStateOfParent} mode={this.state.mode}/>
            case 'thread':
                return <ThreadMain thread={this.state.thread} setStateOfParent={this.setStateOfParent}/>
            default:
                return <ThreadsPageClass setStateOfParent={this.setStateOfParent} mode={this.state.mode}/>
        }
    }

    render()
    {

        return (
            <div>
                {this.selectedTab()}
            </div>
        );
    
    }
}