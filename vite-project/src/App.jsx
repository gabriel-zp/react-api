import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chart from './Chart'

const yParameters1 = [345,3245,32,332,324,645,331];
const yParameters2 = [124,5235,52345435,123123,5234,234,4234];
const xParam1 = [1,2,3,4,5,6,7,8,9,10];
const xParam2 = [11,12,13,14,15,16,17,18,19,20];

const initialCharts = [
  {xparam: xParam1, yparam: yParameters1},
  {xparam: xParam2, yparam: yParameters2},
  {xparam: xParam1, yparam: yParameters1},
  {xparam: xParam2, yparam: yParameters2},
  {xparam: xParam1, yparam: yParameters1},  
];

function App() {
  const [charts, setCharts] = useState(initialCharts);

  const addChart = () => {
    setCharts([...charts, {xparam: xParam2, yParameters2}]);
  };

  const resetCharts = () => {
    setCharts(initialCharts);
  }
  return (
    <>
    <div className={'plotting-area'} >
      <div className={'charts'} style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
        {charts.map((chart, index) =>(
          <Chart key={index} xparam={chart.xparam} yparam={chart.yparam} />
        ))}
        
      </div>
      <div className={'buttons'} style={{display:'flex', alignItems: 'center'}}>
        <button onClick={addChart}>Add Chart</button>
        <button onClick={resetCharts}>Reset Charts</button>
      </div> 
    </div>
      
    </>
  )
}

export default App
