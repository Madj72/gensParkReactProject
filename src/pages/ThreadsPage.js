import react,{useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../redux/authActions';
import '../css/threadspage.css';
import {userLogin} from '../api/authenticationService';
import {Alert,Spinner} from 'react-bootstrap';
import Button from '../components/Button.js';
import ThreadsPageThread from '../components/ThreadsPageThread';
import threads from '../threads.js';

const ThreadsPage=({loading,error,...props})=>{
    
    // Threads page with dummy data
    // TODO: Hook up with API
    let threads_list = threads.threads;

    return (
        <div className="threads-page">
            <header className="threads-header">

            </header>
            <div className="threads-body">
                {threads_list.map(t => <ThreadsPageThread thread={t}/>)}
            </div>
            <footer className="threads-footer">

            </footer>
        </div>
    )
   
}

const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ThreadsPage);