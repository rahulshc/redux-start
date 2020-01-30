import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../utility';

const initialCounter = {
    counter: 0
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
            return updateObject(state, {counter: state.counter -1})
            
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value})
           
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value})

        default:
            return state
    }
}

export default reducer;