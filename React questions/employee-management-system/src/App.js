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
    let empCard = document.querySelector(".emp-details__card")
    if(empData.length === 0) {
      empCard.style.display = "none"
    }
    
    else {
      if(empCard.style.display === "none") {
        empCard.style.display = "flex"
      }
      let selEmp = empData.filter(emp => emp.id === id)[0]
      setSelectedEmployee(selEmp)
    }
    
  }

  const hideModal = (e) => {
    console.log(e);
  }

  const deleteEmployeeData = (id) => {
    let newEmpData = empData.filter(emp => emp.id !== id)
    setEmpData(newEmpData)
    setSelectedEmployee(empData[0])
  }

  const addEmployee = (e) => {
    e.preventDefault();
    let addEmployeeForm = document.querySelector(".add-Modal__form")
    const formData = new FormData(addEmployeeForm)
    const values = [...formData.entries()];
    console.log(values);

    let newEmpObj = []
    values.map(v => 
      newEmpObj[v[0]] = v[1]
    )
    console.log('newEmpObj', newEmpObj);

    newEmpObj.id = empData[empData.length-1].id + 1;
    newEmpObj.age = ''
    newEmpObj.imageUrl = empData.imageUrl || "https://cdn-icons.-png.flaticon.com/512/0/93/png"
    setEmpData(empData => [...empData, newEmpObj])
    setToggleModal(!toggleModal)
  }

  return (
    <div className="container">
{console.log('empData', empData)}
      <div className='header'>
        <div className='header__title'>Employee DBMS</div>
        <div className='header__title'>
          <button className='header__btn' onClick={() => setToggleModal(!toggleModal)}>Add Employee</button>
        </div>
      </div>

      <div className='emp-details'>
        <div className='emp-details__list'>
          {
            empData.map(emp => <EmpNameCard inputData={emp} openNewEmployee={() => openNewEmployee(emp.id)} deleteEmployeeData={() => deleteEmployeeData(emp.id)}/>)
          }
          
        </div>
        <div className='emp-details__card'>
          <EmpCard info={selectedEmployee} />
        </div>
      </div>

      {toggleModal && <div className='add-modal' onClick={(e) => hideModal(e)}>
          <form className='add-Modal__form' onSubmit={(e) => addEmployee(e)}>
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
