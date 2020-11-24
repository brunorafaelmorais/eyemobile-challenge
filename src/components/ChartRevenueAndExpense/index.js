import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'
import { useEffect, useMemo, useState } from 'react'

import filterByType from '../../utils/filterByType'
import calculateTotal from '../../utils/calculateTotal'
import { LegendContainer } from '../Legend/styles'
import Legend from '../Legend'
import formatCurrency from '../../utils/formatCurrency'

function ChartRevenueAndExpense({ transactions }) {
  const [formatedTotalRevenue, setFormatedTotalRevenue] = useState('')
  const [formatedTotalExpense, setFormatedTotalExpense] = useState('')
  const [data, setData] = useState({})
  const [options] = useState({
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    }
  })

  const total = useMemo(() => calculateTotal(transactions, 'amount'), [
    transactions
  ])

  useEffect(() => {
    const filteredRevenue = filterByType('receitas')(transactions)
    const filteredExpense = filterByType('despesas')(transactions)

    const totalRevenue = calculateTotal(filteredRevenue, 'amount')
    const totalExpense = calculateTotal(filteredExpense, 'amount')

    setFormatedTotalRevenue(
      `R$ ${formatCurrency(totalRevenue)} (${(
        (totalRevenue * 100) /
        total
      ).toFixed(2)}%)`
    )

    setFormatedTotalExpense(
      `R$ ${formatCurrency(totalExpense)} (${(
        (totalExpense * 100) /
        total
      ).toFixed(2)}%)`
    )

    setData({
      labels: ['', ''],
      datasets: [
        {
          data: [totalRevenue, totalExpense],
          backgroundColor: ['rgba(1, 220, 170, 1)', 'rgba(254, 79, 100, 1)'],
          maxBarThickness: 40
        }
      ]
    })
  }, [transactions, setData, total])

  return (
    <>
      <Bar data={data} options={options} />
      <LegendContainer>
        <Legend
          color="rgba(1, 220, 170, 1)"
          primaryText="Receitas"
          secondaryText={formatedTotalRevenue}
        />
        <Legend
          color="rgba(254, 79, 100, 1)"
          primaryText="Despesas"
          secondaryText={formatedTotalExpense}
        />
      </LegendContainer>
    </>
  )
}

ChartRevenueAndExpense.propTypes = {
  transactions: PropTypes.array
}

export default ChartRevenueAndExpense
