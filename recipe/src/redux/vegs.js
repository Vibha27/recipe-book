import * as ActionTypes from './ActionTypes';

export const Vegs = (state = {
    isLoading : true,
    errMess : null,
    vegs: []
},action) => {
    switch(action.type) {
        case ActionTypes.ADD_VEG :
            return {...state, isLoading: false, errMess:null, vegs: action.payload }

        case ActionTypes.VEG_LOADING :
            return {...state, isLoading: true, errMess:null, vegs:[]}

        case ActionTypes.VEG_FAILED :
            return {...state, isLoading: false, errMess:action.payload, vegs:[]}

        default : 
            return state;
    }
}