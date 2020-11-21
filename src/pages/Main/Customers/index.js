import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getAllCustomers } from '../../../store/ducks/customers'

function Customers() {
  const customers = useSelector(state => state.customers)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCustomers())
  }, [])

  return (
    <div>
      <ul>
        {customers.list.map(customer => (
          <li key={customer.id}>
            {customer.id} - {customer.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Customers
