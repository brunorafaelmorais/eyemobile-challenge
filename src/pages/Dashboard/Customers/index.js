import { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTable, useGlobalFilter, useAsyncDebounce } from 'react-table'
import { MdSearch } from 'react-icons/md'

import { TableContainer } from '../../../components/TableContainer'

import { getAllCustomers } from '../../../store/ducks/customers'
import { SearchBox } from './styles'

function Customers() {
  const customers = useSelector(state => state.customers)

  const dispatch = useDispatch()

  const data = useMemo(() => customers.list, [customers.list])

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id'
      },
      {
        Header: 'Nome',
        accessor: 'name'
      },
      {
        Header: 'Documento',
        accessor: 'document'
      },
      {
        Header: 'Data Nascimento',
        accessor: 'birthdate'
      },
      {
        Header: 'Cliente desde',
        accessor: 'customer_since'
      },
      {
        Header: 'Última compra',
        accessor: 'last_purchase'
      }
    ],
    []
  )

  const tableInstance = useTable({ columns, data }, useGlobalFilter)

  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    globalFilter,
    setGlobalFilter,
    headerGroups,
    rows
  } = tableInstance

  useEffect(() => {
    dispatch(getAllCustomers())
  }, [])

  const [valueSearch, setValueSearch] = useState(globalFilter)
  const handleChangeSearch = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <div>
      <TableContainer>
        <SearchBox htmlFor="search">
          <MdSearch size={24} />
          <input
            id="search"
            value={valueSearch || ''}
            type="search"
            placeholder="Digite para pesquisar..."
            onChange={event => {
              setValueSearch(event.target.value)
              handleChangeSearch(event.target.value)
            }}
          />
        </SearchBox>

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableContainer>
    </div>
  )
}

export default Customers
