import {useState} from 'react'
import './App.css';

function App() {
  const [count,setCount] = useState(0);
  const [showWarning, setShowWarning] = useState(false)
  return (
    <div className="App" data-test='component-app'>
      <h1 data-test='counter-display'>The current counter is 
    <span data-test='count'>{count}</span>
      </h1>
      <button onClick={() => {
        setCount(prevState => prevState + 1);
      }} data-test='increment-button'>Increment Button</button>
      <button onClick={() => {
        if(count > 0) {
          setCount(prevState => prevState - 1);
        } else {
          setShowWarning(!showWarning);
        }
      }} data-test='decrement-button'>Decrement Button</button>
      {showWarning? <div data-test='warning-message'>Warning Message: Count cannot go below 0</div>: null}
    </div>
  );
}

export default App;
