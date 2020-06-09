import * as ActionTypes from './ActionTypes';

export const Drinks = (state = {
    isLoading : true,
    errMess : null,
    drinks: []
},action) => {
    switch(action.type) {
        case ActionTypes.ADD_DRINK :
            return {...state, isLoading: false, errMess:null, drinks: action.payload }

        case ActionTypes.DRINK_LOADING :
            return {...state, isLoading: true, errMess:null, drinks:[]}

        case ActionTypes.DRINK_FAILED :
            return {...state, isLoading: false, errMess:action.payload, drinks:[]}

        default : 
            return state;
    }
}