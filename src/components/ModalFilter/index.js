import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import Modal from '../Modal'
import { Form } from './styles'
import { Types as transactionsTypes } from '../../store/ducks/transactions'

function ModalFilter({ isOpen, setIsOpen }) {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = useCallback(
    event => {
      event.preventDefault()

      dispatch({
        type: transactionsTypes.FILTER_BY_RANGE_DATE,
        payload: {
          startDate,
          endDate
        }
      })

      setIsOpen()
    },
    [dispatch, setIsOpen, startDate, endDate]
  )

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="startDate">Data Inicial</label>
          <input
            onChange={event => setStartDate(event.target.value)}
            value={startDate}
            type="date"
            id="startDate"
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">Data Final</label>
          <input
            onChange={event => setEndDate(event.target.value)}
            value={endDate}
            type="date"
            id="endDate"
            required
            min={startDate}
          />
        </div>
        <div>
          <button type="submit">Aplicar Filtro</button>
        </div>
      </Form>
    </Modal>
  )
}

ModalFilter.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
}

export default ModalFilter
