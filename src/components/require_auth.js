import React, { Component } from 'react';
import { connect } from 'react-redux'

// higer order component
export default function(ComposedComponent) {
    class Authentication extends Component {
        render() {
            console.log(this.props.authenticated);
            if (this.props.authenticated) {
                return <ComposedComponent {...this.props} />
            }
            
            
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.authenticated }
    }

    return connect(mapStateToProps)(Authentication);
}

/*

*/