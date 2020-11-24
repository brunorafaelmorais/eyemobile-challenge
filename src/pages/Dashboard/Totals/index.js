import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  getAllTransactions,
  Types as transactionsTypes
} from '../../../store/ducks/transactions'
import calculateTotal from '../../../utils/calculateTotal'
import formatCurrency from '../../../utils/formatCurrency'

import {
  TotalBox,
  ContentAll,
  FilterBox,
  ChartTitle,
  ChartsContainer
} from './styles'
import ChartRevenueAndExpense from '../../../components/ChartRevenueAndExpense'
import ChartService from '../../../components/ChartService'
import ModalFilter from '../../../components/ModalFilter'
import Alert from '../../../components/Alert'

function Totals() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const transactions = useSelector(state => state.transactions.filtered)

  const total = useMemo(() => calculateTotal(transactions, 'amount'), [
    transactions
  ])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTransactions())
  }, [dispatch])

  const toggleModal = useCallback(() => {
    setModalOpen(state => !state)
  }, [])

  const handleClickFilter = useCallback(
    (type, index) => {
      setActiveIndex(index)
      dispatch({ type })
    },
    [dispatch]
  )

  const handleClickFilterOther = useCallback(() => {
    setActiveIndex(4)
    toggleModal()
  }, [toggleModal])

  const handleClickFilterAll = useCallback(() => {
    setActiveIndex(0)

    dispatch(getAllTransactions())
  }, [dispatch])

  return (
    <div>
      <ModalFilter isOpen={modalOpen} setIsOpen={toggleModal} />

      <div>
        <FilterBox>
          <button
            type="button"
            onClick={() => handleClickFilterAll()}
            className={activeIndex === 0 ? 'active' : ''}
          >
            <span>Todas</span>
          </button>
          <button
            type="button"
            onClick={() =>
              handleClickFilter(transactionsTypes.FILTER_BY_TODAY, 1)
            }
            className={activeIndex === 1 ? 'active' : ''}
          >
            <span>Hoje</span>
          </button>
          <button
            type="button"
            onClick={() =>
              handleClickFilter(transactionsTypes.FILTER_BY_LAST_WEEK, 2)
            }
            className={activeIndex === 2 ? 'active' : ''}
          >
            <span>Última semana</span>
          </button>
          <button
            type="button"
            onClick={() =>
              handleClickFilter(transactionsTypes.FILTER_BY_LAST_MONTH, 3)
            }
            className={activeIndex === 3 ? 'active' : ''}
          >
            <span>Último mês</span>
          </button>
          <button
            type="button"
            onClick={() => handleClickFilterOther()}
            className={activeIndex === 4 ? 'active' : ''}
          >
            <span>Outro Período</span>
          </button>
        </FilterBox>

        {!transactions.length && <Alert text="Sem registro(s) para mostrar." />}

        {transactions.length > 0 && (
          <ContentAll>
            <TotalBox>
              <span className="title">Valor Total</span>
              <span className="value">
                <small>R$</small>
                {formatCurrency(total)}
              </span>
            </TotalBox>

            <ChartsContainer>
              <div>
                <ChartTitle>Transações</ChartTitle>
                <ChartService transactions={transactions} />
              </div>
              <div>
                <ChartTitle>Receitas X Despesas</ChartTitle>
                <ChartRevenueAndExpense transactions={transactions} />
              </div>
            </ChartsContainer>
          </ContentAll>
        )}
      </div>
    </div>
  )
}

export default Totals
