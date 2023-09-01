import './App.css'
import Calculator from './components/Calculator'
import CalculatorUseReducer from './components/CalculatorUseReducer'

function App() {

  return (
    <div style={{display:'flex'}}>
      <Calculator />
      <CalculatorUseReducer />
    </div>
  )
}

export default App
