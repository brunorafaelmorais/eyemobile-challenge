import {
  startOfDay,
  parseISO,
  startOfWeek,
  startOfMonth,
  endOfDay
} from 'date-fns'

import api from '../../services/api'

export const Types = {
  GET_ALL: 'transactions/GET_ALL',
  FILTER_BY_TODAY: 'transactions/FILTER_BY_TODAY',
  FILTER_BY_LAST_WEEK: 'transactions/FILTER_BY_LAST_WEEK',
  FILTER_BY_LAST_MONTH: 'transactions/FILTER_BY_LAST_MONTH',
  FILTER_BY_RANGE_DATE: 'transactions/FILTER_BY_RANGE_DATE'
}

const INITIAL_STATE = {
  list: [],
  filtered: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_ALL:
      return {
        ...state,
        list: action.payload,
        filtered: action.payload
      }

    case Types.FILTER_BY_TODAY:
      return {
        ...state,
        filtered: state.list.filter(transaction => {
          return parseISO(transaction.time) >= startOfDay(new Date())
        })
      }

    case Types.FILTER_BY_LAST_WEEK:
      return {
        ...state,
        filtered: state.list.filter(transaction => {
          return parseISO(transaction.time) >= startOfWeek(new Date())
        })
      }

    case Types.FILTER_BY_LAST_MONTH:
      return {
        ...state,
        filtered: state.list.filter(transaction => {
          return parseISO(transaction.time) >= startOfMonth(new Date())
        })
      }

    case Types.FILTER_BY_RANGE_DATE:
      const startDate = startOfDay(parseISO(action.payload.startDate))
      const endDate = endOfDay(parseISO(action.payload.endDate))

      return {
        ...state,
        filtered: state.list.filter(transaction => {
          return (
            parseISO(transaction.time) >= startDate &&
            parseISO(transaction.time) <= endDate
          )
        })
      }

    default:
      return state
  }
}

export const getAllTransactions = () => {
  return async dispatch => {
    try {
      const response = await api.get('transactions')

      dispatch({
        type: Types.GET_ALL,
        payload: response.data
      })
    } catch (err) {
      alert(err.message)
    }
  }
}
