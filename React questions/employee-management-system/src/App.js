import './App.css';

function App() {
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
          List
        </div>
        <div className='emp-details__card'>
          Info Card
        </div>
      </div>
    </div>
  );
}

export default App;
