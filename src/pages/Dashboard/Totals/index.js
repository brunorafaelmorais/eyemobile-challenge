import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllTransactions } from '../../../store/ducks/transactions'
import calculateTotal from '../../../utils/calculateTotal'
import formatCurrency from '../../../utils/formatCurrency'

function Totals() {
  const transactions = useSelector(state => state.transactions.list)

  const total = useMemo(() => calculateTotal(transactions, 'amount'), [
    transactions
  ])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTransactions())
  }, [])

  return (
    <div>
      <h2>Total: {formatCurrency(total)}</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id}>{transaction.product_name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Totals
