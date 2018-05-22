const INCREMENT_COUNTER = 'incrementCounter/INCREMENT';
const HALF_COUNTER = 'incrementCounter/HALF';

//reducer
export default (state = {counter:0}, action) => {
    switch (action.type){
        case INCREMENT_COUNTER:{
            var newState = {...state};
            newState.counter += action.value;
            return newState;
        }
        case HALF_COUNTER:{
            var newCounter = state.counter / 2;
            return {...state, counter: newCounter};
        }default:{
            return state;
        }
    }

}

//actions
export const halfCounter = (currentValue) => {
    return {type: HALF_COUNTER};
}

export const increment = (incrementValue) => {
    return {type: INCREMENT_COUNTER, value: incrementValue};
}