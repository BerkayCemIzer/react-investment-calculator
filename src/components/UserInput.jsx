import React, { useState } from 'react'


const UserInput = ({ setInput, UserInput }) => {

  function handleChange(event, input) {
    setInput(prevInput => {
      const data = { ...prevInput, [input]: Number(event.target.value) };
      return data;
    })
  }

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor="">initial investment</label>
          <input type="number" onChange={(event) => handleChange(event, "initialInvestment")} value={UserInput.initialInvestment} required/>
        </p>
        <p>
          <label htmlFor="">annual investment</label>
          <input type="number" onChange={(event) => handleChange(event, "annualInvestment")} value={UserInput.annualInvestment} required/>
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor="">expected return</label>
          <input type="number" onChange={(event) => handleChange(event, "expectedReturn")} value={UserInput.expectedReturn} required/>
        </p>
        <p>
          <label htmlFor="">duration</label>
          <input type="number" onChange={(event) => handleChange(event, "duration")} value={UserInput.duration} required/>
        </p>
      </div>
    </section>
  )
}

export default UserInput