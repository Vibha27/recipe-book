import * as ActionTypes from './ActionTypes';

export const Desserts = (state = {
    isLoading : true,
    errMess : null,
    desserts: []
},action) => {
    switch(action.type) {
        case ActionTypes.ADD_DESSERT :
            return {...state, isLoading: false, errMess:null, desserts: action.payload }

        case ActionTypes.DESSERT_LOADING :
            return {...state, isLoading: true, errMess:null, desserts:[]}

        case ActionTypes.DESSERT_FAILED :
            return {...state, isLoading: false, errMess:action.payload, desserts:[]}

        default : 
            return state;
    }
}