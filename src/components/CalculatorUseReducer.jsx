import { useReducer } from 'react'
import './calculator.css'
import { initialState, reducer } from './reducers/reducerCalculator';

const CalculatorUseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="calculator-container">
            <h1>useReducer</h1>
            <div className="form-container">
                <div className="form-group">
                    <label className="form-label" htmlFor="number1">Number 1</label>
                    <input className="form-input" type="number" id="number1" onChange={(e) => dispatch({ type: "SET_NUMBER1", payload: Number(e.target.value) })} />
                </div>
                <div className="form-group">
                    <label className="form-label" htmlFor="number2">Number 2</label>
                    <input className="form-input" type="number" id="number2" onChange={(e) => dispatch({ type: "SET_NUMBER2", payload: Number(e.target.value) })} />
                </div>
                <button className="form-button" onClick={() => dispatch({ type: "SET_RESULT", payload: state.number1 + state.number2 })}>Add</button>
                <div className="form-group">
                    <label className="form-label" htmlFor="result">Result</label>
                    <input className="form-input" type="number" id="result" readOnly value={state.result} />
                </div>
            </div>
        </div>
    )
}

export default CalculatorUseReducer