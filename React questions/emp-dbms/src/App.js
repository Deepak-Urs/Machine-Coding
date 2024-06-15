import { useEffect, useState } from 'react';
import data from './constants/data.json'
import './App.css';
import EmpNameCard from './components/EmpNameCard';
import EmpInfo from './components/EmpInfo';

function App() {
  const [empData, setEmpData] = useState([]);
  const [selEmpData, setSelEmpData] = useState({});

  async function getEmployeeData(){
    try {
      //let data = await fetch(data);
      //let res = await data.json();
      //console.log(res);
      setEmpData(data);
      console.log(empData)
    }
    catch(e) {
      console.log(e)
    }
    
  }

  const getSelectedEmpData = () => {
    console.log("setSelEmpData(empData[0]);");
    setSelEmpData(data[0]);
  }

  useEffect(() => {
    getEmployeeData();
    getSelectedEmpData();
    //setSelEmpData(data[0]);
  }, [])


  return (
    <div className='app'>

      <header className='header'>
        <div className="header__title">
          EMPLOYEE DBMS
        </div>
        <div className="header__add-employee">
          <button> Add Employee</button>
        </div>
      </header>

      <section className='employees__section'>
        <div className="employees__section--names">
          {empData.map(e => <EmpNameCard key={e.id} firstName={e.firstName} lastName={e.lastName}/>)}
        </div>
        <div className="employees__section__info">
          {empData && <EmpInfo data={selEmpData}/>}
        </div>
      </section>

      <footer className='footer'>
        Copyrights 2024 TM
      </footer>
    </div>
  );
}

export default App;
