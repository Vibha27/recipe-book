import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createForms} from 'react-redux-form';
import { Dishes } from './dishes';
import { Vegs } from './vegs';
import { Nonvegs } from './nonvegs';
import { Desserts } from './desserts';
import { Drinks } from './drinks';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import InitialAddRecipe  from './forms';

export const ConfigureStore = ()=> {
    // redux store
    const store = createStore(
       combineReducers({
           dishes : Dishes,
           comments : Comments,
           vegs : Vegs,
           nonvegs : Nonvegs,
           desserts: Desserts,
           drinks: Drinks,
           ...createForms({
               addrecipe : InitialAddRecipe
           })
       }),
       applyMiddleware(logger, thunk)
    );

    return store;
}