import './vehicle.css'
const vehicle = props => (
    
    <div  className ='car'>
        
<h1>   
         Vehicle:{props.VehicleType}   
</h1>
<p> Name:{props.Name}</p>
<p>Manufacture:{props.Manufacture}</p>
<p>Fuel:{props.Fuel}</p>
<p>Comment:{props.Childern} </p>
</div>
);
export default vehicle;