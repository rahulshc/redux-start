import * as actionTypes from './actions';

const initialCounter = {
    counter: 0,
    results: []
}
const reducer = (state=initialCounter, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
            /*returning state like this will overwrite matching property 
        name (counter here) and replace it means results will be lost 
            return {
                counter: state.counter +1
            }*/
            const newState = Object.assign({}, state);
            newState.counter=state.counter+1;
            return newState;
        //no break needed as return already breaks it
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter-1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})//state.results.push will push to the original state results array
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