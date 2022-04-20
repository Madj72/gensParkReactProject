
import React, { Component } from 'react';
import {Alert,Spinner} from 'react-bootstrap';



export default class Button extends React.Component {

    render(){
        let loading = this.props.loading;
        let onclick = this.props.onclick;
        let text = this.props.txt;
        let className = this.props.className;

        return <button type="submit" className={`btn btn-primary ${className}`}>
            {text}
            {loading && (
                <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            )}
        </button>
    }

}