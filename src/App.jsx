
import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState("")
  const [errorMessage,setErrorMessage]=useState("")

  const calculateBMI = () => {
    const isValidHeight=/^\d+$/.test(height)
    const isValidweight=/^\d+$/.test(weight)
    if (isValidHeight && isValidweight) {
      const heightInMeters = height / 100
      const bmivalue = weight / (heightInMeters * heightInMeters)
      setBmi(bmivalue.toFixed(2))
      if (bmivalue < 18.5) {
        setBmiStatus("Underweight")
      } else if (bmivalue >= 18.5 && bmivalue < 24.9) {
        setBmiStatus("Normal Weight")
      } else if (bmivalue >= 25 && bmivalue < 29.9) {
        setBmiStatus("Overweight")
      } else {
        setBmiStatus("Obese")
      }
      setErrorMessage("")
    } else {
      setBmi(null)
      setBmiStatus("")
      setErrorMessage("Please enter valid numeric values for height and weight")
    }
  }
  const clearAll =()=>{
    setHeight("")
    setWeight("")
    setBmi(null)
    setBmiStatus("")
  }

  return (
    <>
      <div className='bmi-calculator'>
        <div className='box'></div>
        <div className='data'>
          <h1>BMI Calculator</h1>
          {/* Please enter valid numeric values for height and weight */}
          {errorMessage && <p className='error'>{errorMessage}</p>}
          <div className='input-container'>
            <label htmlFor='height'>Height (cm):</label>
            <input type='text' value={height} onChange={(e) => setHeight(e.target.value)} id='height' />
          </div>
          <div className='input-container'>
            <label htmlFor='weight'>Weight (kg):</label>
            <input type='text' value={weight} onChange={(e) => setWeight(e.target.value)} id='weight' />
          </div>
          <button onClick={calculateBMI}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className='result'>
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
