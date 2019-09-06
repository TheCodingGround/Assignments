import { combineReducers } from 'redux'

import users from './users/reducer'
import books from './books/reducer'

export default combineReducers({
  users,
  books
})