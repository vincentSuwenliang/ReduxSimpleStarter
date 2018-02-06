
import {
    FETCH_USERS
} from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_USERS:
        
            const newState = [...state, ...action.payload ];
            console.log('exec', newState);
            return [...state, ...action.payload ];
    }

    return state
}