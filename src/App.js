import './App.css';
import Vehicle from './Vehicle/vehicle';

function App() {
  return (
    <div className="App">
      <Vehicle VehicleType="Car" Name="Altroz" Manufacture="Tata" Fuel="Petrol"/>
      <Vehicle VehicleType="Car" Name="BMW" Manufacture="BMW" Fuel="Disel"/>
      <Vehicle VehicleType="Car" Name="Nano" Manufacture="Tata" Fuel="Petrol"/>


      </div>
  );
}

export default App;
