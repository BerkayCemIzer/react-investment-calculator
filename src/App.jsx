import { useState } from "react"
import Header from "./components/Header"
import ResultsTable from "./components/ResultsTable"
import UserInput from "./components/UserInput"
import { calculateInvestmentResults } from "./util/investment"

function App() {

  const INITIAL_INPUT = {
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  }

  const [input, setInput] = useState(INITIAL_INPUT);

  const inputIsValid = input.duration >= 1

  const calculatedData = calculateInvestmentResults(input)

  return (
    <>
      <Header />
      <UserInput setInput={setInput} UserInput={input} />
      {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
      {inputIsValid && <ResultsTable calculatedData={calculatedData} />}
    </>
  )
}

export default App
