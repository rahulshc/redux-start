import * as actionTypes from '../actions';

const initialCounter = {
    results: []
}
const reducer = (state=initialCounter, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})//state.results.push will push to the original state results array
            }
        case actionTypes.DELETE_RESULT:
           /* const id=2;
            const newArray = [...state.results];
            newArray.splice(id,1);*/
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
        default:
            return state
    }
}

export default reducer;