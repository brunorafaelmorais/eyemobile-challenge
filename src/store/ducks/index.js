import { combineReducers } from 'redux'

import transactions from './transactions'
import customers from './customers'

export default combineReducers({
  transactions,
  customers
})
