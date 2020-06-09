import * as ActionTypes from './ActionTypes';

export const Nonvegs = (state = {
    isLoading : true,
    errMess : null,
    nonvegs: []
},action) => {
    switch(action.type) {
        case ActionTypes.ADD_NONVEG :
            return {...state, isLoading: false, errMess:null, nonvegs: action.payload }

        case ActionTypes.NONVEG_LOADING :
            return {...state, isLoading: true, errMess:null, nonvegs:[]}

        case ActionTypes.NONVEG_FAILED :
            return {...state, isLoading: false, errMess:action.payload, nonvegs:[]}

        default : 
            return state;
    }
}