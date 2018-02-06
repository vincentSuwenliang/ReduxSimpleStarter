import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {

    componentWillMount() {
        console.log('get this.props', this.props);
        
        this.props.fetchUsers();
        console.log('get this.props', this.props);
    }

    renderUser(user) {
        return (
            <div key={user.name} className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">Cheese Factory</p>
                <a className="btn btn-primary">Email</a>
            </div>
        );
        
    }
    render() {
        return (
            <div>
                {this.props.users.map(this.renderUser)}
            </div>
        );
    };
}


function mapStateToProps(state) {
    return {
        
        
        users: state.users
    };
}

export default connect(mapStateToProps, actions)(UserList);