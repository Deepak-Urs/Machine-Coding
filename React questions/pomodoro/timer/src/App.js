import './App.css';
import TimerWrapper from './components/TimerWrapper';



function App() {
  const onExpire = () => alert('Timer expired!')

  return (
    <div className="App">
      <header><h1>Timer App</h1></header>
      <TimerWrapper onExpire={onExpire} duration={6000}/>
    </div>
  );
}

export default App;
