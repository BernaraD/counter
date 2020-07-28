import React, {useState} from 'react';
import Counter from "./Counter";
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

function App() {

    const [counters, setCounters] = useState([0, 1, 2])

    const addCounter = () => {
        setCounters([...counters, 0])
    }

    const onAdd1 = (index) => {
        const updatedCounter = [...counters]
        updatedCounter[index] = updatedCounter[index] + 1
        setCounters(updatedCounter)
    }

    const onMinus1 = (index) => {
        const updatedCounter = [...counters]
        updatedCounter[index] -= 1
        setCounters(updatedCounter)
    }

    const resetAll = () => {
        setCounters([])

        const updatedCounter = ([...counters])
        updatedCounter.map(element => 0)

    }

    const onDelete = (index) => {
        const updatedCount = counters.filter((element, i) => i !== index)
        setCounters(updatedCount)
    }

    const onResetToZero = (index) => {
        const updatedCount = [...counters]
        updatedCount[index] = 0
        setCounters(updatedCount)


    }


    return (
        <div className="App" style={{margin: "30px"}}>
            <h3>Counter</h3>
            {counters.map((el, i) =>
                <Counter
                    count={el}
                    key={i}
                    index={i}
                    onAdd1={onAdd1}
                    onMinus1={onMinus1}
                    onDelete={onDelete}
                    onResetToZero={onResetToZero}

                />)}

            <button type="button"
                    className="btn btn-outline-success"
                    onClick={addCounter}>Add counter
            </button>

            <button type="button" style={{margin: "5px"}}
                    className="btn btn-outline-success"
                    onClick={resetAll}>Reset All
            </button>


        </div>
    );
}

export default App;
