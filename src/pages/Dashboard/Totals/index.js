import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllTransactions } from '../../../store/ducks/transactions'
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

function Totals() {
  const [activeIndex, setActiveIndex] = useState(0)

  const transactions = useSelector(state => state.transactions.list)

  const total = useMemo(() => calculateTotal(transactions, 'amount'), [
    transactions
  ])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTransactions())
  }, [dispatch])

  return (
    <div>
      <FilterBox>
        <button
          type="button"
          onClick={() => setActiveIndex(0)}
          className={activeIndex === 0 ? 'active' : ''}
        >
          <span>Hoje</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex(1)}
          className={activeIndex === 1 ? 'active' : ''}
        >
          <span>Última semana</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex(2)}
          className={activeIndex === 2 ? 'active' : ''}
        >
          <span>Último mês</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveIndex(3)}
          className={activeIndex === 3 ? 'active' : ''}
        >
          <span>Outro Período</span>
        </button>
      </FilterBox>
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
    </div>
  )
}

export default Totals
