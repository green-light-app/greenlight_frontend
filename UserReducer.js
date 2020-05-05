import { combineReducers } from 'redux'; 

const INITIAL_STATE = {
    currentUser: {}, 
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'WORDS': 
            const newState = {current, possible}; 
            return newState 
        default: 
            return state 
    }
}

export default combineReducers({
    user: userReducer, 
})