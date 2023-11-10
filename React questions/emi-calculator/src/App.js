import './App.css';
import { useEffect, useState } from 'react';
import { tenureData } from './utils/constants';

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(0);
  const [fee, setFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    if(!(cost > 0)) {
      setDownPayment(0)
      setEmi(0)
    }
    const emi = calculateEMI(downPayment);
    setEmi(emi)
  }, [tenure])

  const calculateEMI = (downpayment) => {
    if(!cost) return

    const loanAmt = cost - downpayment;
    const rateOfInterest = interest / 100;
    const numOfYears = tenure /12;

    const EMI = (loanAmt*rateOfInterest*(1+rateOfInterest)**numOfYears)/((1+rateOfInterest)**numOfYears)
    return Number(EMI/12).toFixed(0) 
  }

  const calculateDP = () => {
    if(!cost) return

    const downPaymentPercent = 100 - (emi/calculateEMI(0)) * 100
    return Number((downPaymentPercent/100)*cost).toFixed(0)
  }

  const updateEMI = (e) => {
    if(!cost) return

    const dp = Number(e.target.value)
    setDownPayment(dp.toFixed(0))

    const emi = calculateEMI(dp)
    setEmi(emi)
  }

  const updateDownPayment = (e) => {
    if(!cost) return

    const emi = Number(e.target.value)
    setEmi(emi.toFixed(0))

    const dp = calculateDP(emi)
    setDownPayment(dp)
  }


  return (
    <div className="App">
      <span className='title'>
        EMI Calculator
      </span>

      <span className='title'>
        Total Cost of the Asset
      </span>
      <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} placeholder="Total Cost of the Asset" />

      <span className='title'>
        Interest Rate (in %)
      </span>
      <input type="number" value={interest} onChange={(e) => setInterest(e.target.value)} placeholder="Interest Rate (in %)" />

      <span className='title'>
        Processing fee (in %)
      </span>
      <input type="number" value={fee} onChange={(e) => setFee(e.target.value)} placeholder="Processing fee (in %)" />

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
            <label>{emi}</label>
            <label>{calculateEMI(0)}</label>
        </div>
      </div>

      <span className='title'>
        Tenure
      </span>
      <div className='tenureContent'>
      {
        tenureData.map(t => {
          return (
            <button className={`tenure ${t === tenure ? "selected" : ""}`} onClick={() => setTenure(t)}>{t}</button>
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
