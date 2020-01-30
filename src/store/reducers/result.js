import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialCounter = {
    results: []
}
const reducer = (state=initialCounter, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
           /* return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})//state.results.push will push to the original state results array
            //data for example value can be transformed in reducer as well as actionCreator
            }*/
        case actionTypes.DELETE_RESULT:
           /* const id=2;
            const newArray = [...state.results];
            newArray.splice(id,1);*/
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return updateObject(state, {results: updatedArray})
            /*return {
                ...state,
                results: updatedArray
            }*/
        default:
            return state
    }
}

export default reducer;