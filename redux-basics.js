const redux = require('redux');
const createStore = redux.createStore; //decalring function like below does not execute it immediately

const initialState = {
    counter: 0
}
//reducer
//state=initialState assigns a default value to state
const rootReducer = (state=initialState, action) => {
    if(action.type==='INC_COUNTER'){
        return {
            ...state,
            counter: state.counter +1
        }
    }

    if(action.type==='ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    //otherwise return state
    return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(()=> {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
//second arguemnt to the above method can be in a form of a javascript object
