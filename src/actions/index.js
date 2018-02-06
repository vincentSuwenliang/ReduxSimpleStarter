import {
    FETCH_USERS  
} from './types';
// no need default
export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [
            {
                name: 'su'
            },
            {
                name: 'wen'
            },
            {
                name: 'liang'
            }
        ]
    };
}
    
