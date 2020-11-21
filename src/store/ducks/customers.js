import api from '../../services/api'

export const Types = {
  GET_ALL: 'customers/GET_ALL'
}

const INITIAL_STATE = {
  list: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL:
      return {
        ...state,
        list: action.payload
      }

    default:
      return state
  }
}

export const getAllCustomers = () => {
  return async dispatch => {
    try {
      const response = await api.get('customers')

      dispatch({
        type: Types.GET_ALL,
        payload: response.data
      })
    } catch (err) {
      console.log(err)
    }
  }
}
