import React from 'react'
import { formatter } from '../util/investment'

const ResultsTable = ({ calculatedData }) => {

  const initialInvestment = calculatedData[0].valueEndOfYear - calculatedData[0].interest - calculatedData[0].annualInvestment;

  const data = calculatedData.map(item => <tr key={item.year}>
    <td>{item.year}</td>
    <td>{formatter.format(item.valueEndOfYear)}</td>
    <td>{formatter.format(item.interest)}</td>
    <td>{formatter.format(item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment)}</td>
    <td>{formatter.format(item.valueEndOfYear - (item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment))}</td>
  </tr>)

  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Interest Capital</th>
        </tr>
      </thead>
      <tbody>
        {data}
      </tbody>
    </table>
  )
}

export default ResultsTable