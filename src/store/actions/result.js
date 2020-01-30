import * as actionTypes from './actionsTypes';

export const saveResult = (res) => {
    //data can be transformed here as well for example saving res*2 in place of res
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
}
export const storeResult = (res) => {

    return (dispatch, getState) => {
        setTimeout(()=> {
           // const oldCounter = getState().ctr.counter;
           // console.log(oldCounter);
           // no need of the above setup as we set store in reducer
            dispatch(saveResult(res));
        }, 2000)
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    };
}