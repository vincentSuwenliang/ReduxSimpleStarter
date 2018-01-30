


export function selectBook(book) {
    // an object with a type property
    console.log('a book has been selected', book.title);
    return {
        type: 'BOOK_SELECTED',
        paylod: book
    };
}

// ACTION CREATOR is just a function return a Action