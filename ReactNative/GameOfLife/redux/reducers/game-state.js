import actionTypes from '../actionTypes/grid'

const initialState = {grid:[], running: false}

export default (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_GRID:{
        console.log('reducer');
            return {...state, grid: action.value}
        }
        default: {
        console.log('reducer default', action);
            return state;
        }
    }
}