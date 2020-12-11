import './App.css';
import Vehicle from './Vehicle/vehicle';

function App() {
  return (
    <div className="App">
      <h1>List Of Vehicles</h1>
      <Vehicle VehicleType="Car" Name="Altroz" Manufacture="Tata" Fuel="Petrol"/>
      <Vehicle VehicleType="Car" Name="BMW" Manufacture="BMW" Fuel="Disel"/>
      <Vehicle VehicleType="Car" Name="Nano" Manufacture="Tata" Fuel="Petrol" Childern= " Smallest car introduced by TATA" />
      
      


      </div>
  );
}

export default App;
