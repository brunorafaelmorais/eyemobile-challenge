import PropTypes from 'prop-types'
import { useEffect, useMemo, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { v4 as uuid } from 'uuid'

import calculateTotal from '../../utils/calculateTotal'
import formatCurrency from '../../utils/formatCurrency'
import randomColor from '../../utils/randomColor'
import Legend from '../Legend'
import { LegendContainer, LegendTotal } from '../Legend/styles'

function ChartService({ transactions }) {
  const [transformedData, setTransformedData] = useState([])
  const [data, setData] = useState({})
  const [options] = useState({
    responsive: true,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  })

  const total = useMemo(() => calculateTotal(transformedData, 'amount'), [
    transformedData
  ])

  useEffect(() => {
    const result = Object.values(
      transactions.reduce((acc, transaction) => {
        const service = transaction.product_name.toLowerCase()
        const amount = acc[service]
          ? acc[service].amount + transaction.amount
          : transaction.amount

        const calculatePercent = (amount * 100) / total
        const formatedValue = `R$ ${formatCurrency(
          amount
        )} (${calculatePercent.toFixed(2)}%)`

        acc[service] = {
          id: uuid(),
          service,
          amount,
          formated_value: formatedValue,
          color: randomColor()
        }

        return acc
      }, {})
    )

    setTransformedData(result)

    setData({
      labels: result.map(() => ''),
      datasets: [
        {
          data: result.map(res => res.amount),
          backgroundColor: result.map(res => res.color)
        }
      ]
    })
  }, [transactions, total])

  return (
    <>
      <Doughnut data={data} options={options} />

      <LegendContainer>
        {transformedData.map(data => (
          <Legend
            key={data.id}
            color={data.color}
            primaryText={data.service}
            secondaryText={data.formated_value}
          />
        ))}

        <LegendTotal>
          <span className="primaryText">Total</span>
          <span className="secondaryText">
            R$ {formatCurrency(total)} (100%)
          </span>
        </LegendTotal>
      </LegendContainer>
    </>
  )
}

ChartService.propTypes = {
  transactions: PropTypes.array
}

export default ChartService
