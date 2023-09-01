import { useState } from 'react'
import './calculator.css'

const Calculator = () => {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0)

    const calculate = () => {
        setResult(number1 + number2)
    }

    return (
        <div className="calculator-container">
            <h1>useState</h1>
            <div className="form-container">
                <div className="form-group">
                    <label className="form-label" htmlFor="number1">Number 1</label>
                    <input className="form-input" type="number" id="number1" value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="number2">Number 2</label>
                    <input className="form-input" type="number" id="number2" value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
                </div>
                <button className="form-button" onClick={calculate}>Add</button>
                <div className="form-group">
                    <label className="form-label" htmlFor="result">Result</label>
                    <input className="form-input" type="number" id="result" readOnly value={result} />
                </div>
            </div>
        </div>
    )
}

export default Calculator