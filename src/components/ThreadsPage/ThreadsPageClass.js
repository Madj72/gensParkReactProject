import react,{useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../../redux/authActions';
import '../../css/threadspage.css';
import ThreadsPageThread from './ThreadsPageThread';
import threads from '../../dummy-data/threads.js';
import React from 'react';

export default class ThreadsPageClass extends React.Component{

    constructor(props) {
        super(props);
    }
        
    render(){
    
        // TODO: Hook up with API
        let threads_list = threads.threads;

        return (
            <div className="threads-page">
                <header className="threads-header">

                </header>
                <div className="threads-body">
                    {Object.keys(threads_list).map(t => <ThreadsPageThread id={t} setStateOfParent={this.props.setStateOfParent} thread={threads_list[t]} mode={this.props.mode}/>)}
                    {/* {threads_list.map(t => <ThreadsPageThread thread={t}/>)} */}
                </div>
                <footer className="threads-footer">

                </footer>
            </div>
        )

    }

    // Threads page with dummy data

   
}
