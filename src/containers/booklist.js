import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    handleOnClickBook(e, book) {
        console.log('handleOnClickBook', book);
        
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    className="list-group-item" 
                    onClick={(e) => this.handleOnClickBook(e, book)}
                    >
                    {book.title}
                </li>
            )
        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
// App state as param
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // this.props
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// connect()(Component)