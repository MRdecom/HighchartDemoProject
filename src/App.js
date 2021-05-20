import './App.scss';
import DataContainer from "./components/DataContainer";
import NumberOfProject from "./components/NumberOfProject";
import RequiredCapacity from "./components/RequiredCapacity";
import DiskChart from "./components/DiskChart";
import BarPairedChart from "./components/BarPairedChard";
import {
  getRequiredCapacity,
  getScenarioName,
  getTotalPlannedProjectNumber,
  getTotalProjectNumber, preparePlannedProjectChartData, prepBudgedPerBusinessUnitChartData
} from "./dataGetMetods";
import {useEffect, useState} from "react";

const mockDataForDiskChart = [{
  name: 'A',
  y: 50, // value
  z: 10 // size
}, {
  name: 'B',
  y: 50,
  z: 10
}];

const mockDataForDiskChart2 = [{
  name: 'A',
  y: 500, // value
  z: 10 // size
}, {
  name: 'B',
  y: 250,
  z: 10
}, {
  name: 'C',
  y: 150,
  z: 10
}, {
  name: 'D',
  y: 100,
  z: 10
}, {
  name: 'F',
  y: 50,
  z: 10
}, {
  name: 'G',
  y: 5,
  z: 10
}];

function App() {
  const [scenarioName,setScenarioName] = useState('');
  useEffect(()=>{
    setScenarioName(getScenarioName())
  },[])

    return (
    <div className="App">
      <header className="App-header">
        Demo Project
      </header>
      <div className='App-block'>
        <div>
          <DataContainer
              className='number-container'
              title='Number of Project'>
            <NumberOfProject
                includedProject={getTotalPlannedProjectNumber()}
                totalNumberOfProject={getTotalProjectNumber()}/>
          </DataContainer>
          <DataContainer
              className='number-container'
              title='Required Capacity (man-days)'>
            <RequiredCapacity requiredCapacity={getRequiredCapacity()}/>
          </DataContainer>
        </div>
        <DataContainer
            className='disk-chart-container'
            title='Planned Project Counts'>
          <DiskChart scenarioName={scenarioName} data={preparePlannedProjectChartData()}/>
        </DataContainer>
        <DataContainer
            className='bar-chart-container'
            title='Budged per Business Unit'>
          <BarPairedChart chartData={prepBudgedPerBusinessUnitChartData()}/>
        </DataContainer>
        <DataContainer
            className='disk-chart-container'
            title='Capacity Allocation by Priority Types'>
          <DiskChart  scenarioName={scenarioName} data={mockDataForDiskChart}/>
        </DataContainer>
        <DataContainer
            className='disk-chart-container'
            title='Capacity Allocation of Business Unit by Priority'>
          <DiskChart  scenarioName={scenarioName} data={mockDataForDiskChart2}/>
        </DataContainer>
      </div>
    </div>
  );
}

export default App;
