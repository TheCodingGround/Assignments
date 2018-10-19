import actions from './actions'

const initialState = {
    submitting: false,
    submitted: false,
    id: null
}

export default (state = initialState, action) =>{
    switch (action.type){
        case actions.SAVING: {
            return {...state, submitting: true}
        }
        case actions.SAVED: {
            return {...state, submitting: false, submitted: true, ...action.payload }
        }
        case actions.RESET: {
            return {...initialState }
        }
        default:{
            return state
        }
    }
}