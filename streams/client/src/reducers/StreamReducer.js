import _ from 'lodash';
import {
    FETCH_STREAMS,
    CREATE_STREAM,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from '../actions/types';


export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload); //remove a property from an object and returns a new object with the property removed
        case FETCH_STREAMS:
            return{...state, ..._.mapKeys(action.payload, 'id')}; // turns an array into an object as property being the choosen key
        default:
            return state;
    }
}