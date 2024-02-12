import { useEffect, useState } from 'react';
import './App.css';
import data from "./data/data.json"
import EmpNameCard from './components/EmpNameCard';
import EmpCard from './components/EmpCard';

function App() {
  const [empData, setEmpData] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState({})
  const [toggleModal, setToggleModal] = useState(false)

  useEffect(() => {
    setEmpData(data)
    setSelectedEmployee(data[0])
  }, [])

  const openNewEmployee = (id) => {
    let selEmp = empData.filter(emp => emp.id === id)[0]
    setSelectedEmployee(selEmp)
  }

  const hideModal = (e) => {
    console.log(e);
  }

  return (
    <div className="container">

      <div className='header'>
        <div className='header__title'>Employee DBMS</div>
        <div className='header__title'>
          <button className='header__btn' onClick={() => setToggleModal(!toggleModal)}>Add Employee</button>
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

      {toggleModal && <div className='add-modal' onClick={(e) => hideModal(e)}>
          <form className='add-Modal__form'>
            <div className='add-Modal__form__header'>
              <h1>Add New Employee</h1> 
              <span style={{marginLeft: '10px', cursor: 'pointer'}} onClick={() => setToggleModal(!setToggleModal)}>❌</span>
            </div>
            <div><input type='text' name='firstName' placeholder='Enter firstName'/></div>
            <div><input type='text' name='lastName' placeholder='Enter lastName'/></div>
            <div><input type='text' name='salary' placeholder='Enter salary'/></div>
            <div><input type='text' name='contactNumber' placeholder='Enter contactNumber'/></div>
            <div><input type='text' name='dob' placeholder='Enter dob'/></div>
            <div><input type='submit' /></div>
          </form>
      </div>}
    </div>
  );
}

export default App;
