import './App.css';
import { useEffect, useState } from 'react';
import { tenureData } from './utils/constants';
import { numberWithCommas } from './utils/config';
import TextInput from './components/text-input';
import SliderInput from './components/slider-input';

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

  const totalEMI = () => {
    return numberWithCommas((emi*tenure).toFixed(0))
  }

  const totalDownPayment = () => {
    return numberWithCommas((Number(downPayment) + (cost - downPayment) * (fee/100)).toFixed(0))
  }

  return (
    <div className="App">
      <span className='title'>
        EMI Calculator
      </span>

      <TextInput
        title={"Total Cost of Asset"}
        state={cost}
        setState={setCost}
      />

      <TextInput
        title={"Interest Rate (in %)"}
        state={interest}
        setState={setInterest}
      />

      <TextInput
        title={"Processing fee (in %)"}
        state={fee}
        setState={setFee}
      />

      <SliderInput
        title={"Down Payment"}
        underlineTitle={`Total Down Payment - ${totalDownPayment()}`}
        onChange={updateEMI}
        state={downPayment}
        min={0}
        max={cost}
        labelMin={"0%"}
        labelMax={"100%"}
      />

      <SliderInput
        title={"Loan per month"}
        underlineTitle={`Total Loan Amoubt - ${totalEMI()}`}
        onChange={updateDownPayment}
        state={emi}
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
      />

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
