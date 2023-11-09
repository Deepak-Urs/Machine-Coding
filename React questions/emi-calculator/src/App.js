import './App.css';
import { useState } from 'react';

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(0);
  const [downPayment, setdDownPayment] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const updateEMI = () => {

  }

  const updateDownPayment = () => {

  }

  const calculateEMI = () => {

  }

  return (
    <div className="App">
      <span className='title'>
        EMI Calculator
      </span>

      <span className='title'>
        Total Cost of the Asset
      </span>
      <input type="number" value={cost} onChange={(e) => setFee(e.target.value)} placeholder="Total Cost of the Asset" />

      <span className='title'>
        Interest Rate (in %)
      </span>
      <input type="number" value={cost} onChange={(e) => setFee(e.target.value)} placeholder="Interest Rate (in %)" />

      <span className='title'>
        Processing fee (in %)
      </span>
      <input type="number" value={cost} onChange={(e) => setFee(e.target.value)} placeholder="Processing fee (in %)" />

      <span className='title'>
      Down Payment
      </span>
      <div>
        <input className='slider' type='range' min={0} max={cost} value={downPayment} onChange={updateEMI}/>
        <div className='labels'>
          <label>0%</label>
          <label>{downPayment}</label>
          <label>100%</label>
        </div>
      </div>

      <span className='title'>
        Loan per month
      </span>
      <div>
        <input className='slider' type='range' min={calculateEMI(cost)} max={calculateEMI(0)} value={emi} onChange={updateDownPayment}/>
        <div className='labels'>
            <label>{calculateEMI(cost)}</label>
            <label>{downPayment}</label>
            <label>{calculateEMI(0)}</label>
        </div>
      </div>

      <span className='title'>
        Tenure
      </span>
    </div>
  );
}

export default App;
