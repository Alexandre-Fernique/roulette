import React, {useState} from 'react';
import './App.css';
import { Wheel } from 'react-custom-roulette'
import 'react-roulette-pro/dist/index.css';

const data = [
  { option: 'FR'},
  { option: 'EN'},
  { option: 'IT'},
  { option: 'FR'},
  { option: 'EN'},
  { option: 'IT'},
  { option: 'FR'},
  { option: 'EN'},
  { option: 'IT'},
]



function App() {
    const [spin,setSpin]=useState(false)
    return (
    <div className="App">
      <div className="test test2">
        <Wheel
            mustStartSpinning={spin}
            prizeNumber={3}
            data={data}
            backgroundColors={['#3e3e3e']}
            textColors={['#ffffff']}
        />
        <button  onClick={()=>{setSpin(true)}}>Lancer</button>
      </div>
    </div>
  );
}

export default App;
