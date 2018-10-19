import axios from 'axios'
import actions from './actions'

export const addUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: actions.SAVING
    })
    const result = await axios.post('http://localhost:3002/user', { ...user
    })
    dispatch({
      type: actions.SAVED,
      payload: result.data
    })

  }
}