import { useEffect, useState } from 'react';
import './App.css';
import data from "./data/data.json"
import EmpNameCard from './components/EmpNameCard';
import EmpCard from './components/EmpCard';

function App() {
  const [empData, setEmpData] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState({})

  useEffect(() => {
    setEmpData(data)
    setSelectedEmployee(data[0])
  }, [])

  const openNewEmployee = (id) => {
    let selEmp = empData.filter(emp => emp.id === id)[0]
    setSelectedEmployee(selEmp)
  }

  return (
    <div className="container">

      <div className='header'>
        <div className='header__title'>Employee DBMS</div>
        <div className='header__title'>
          <button className='header__btn'>Add Employee</button>
        </div>
      </div>

      <div className='emp-details'>
        <div className='emp-details__list'>
          {
            empData.map(emp => <EmpNameCard inputData={emp} openNewEmployee={() => openNewEmployee(emp.id)}/>)
          }
          
        </div>
        <div className='emp-details__card'>
          <EmpCard info={selectedEmployee} />
        </div>
      </div>
    </div>
  );
}

export default App;
