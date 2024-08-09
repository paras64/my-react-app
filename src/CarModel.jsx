import React, {useState} from 'react';

function CarModel(){
    const [car, setCar] = useState({year: 2077,model: "Mustang",make: "Ford"});
    function onchange(event){
          setCar(c => ({...c,year: event.target.value}));
    }
    function onchange1(event){
        setCar(c => ({...c,model: event.target.value}));
  }
  function onchange2(event){
    setCar(c => ({...c,make: event.target.value}));
}
    return(
        <div>
            <p>Your Fav Car is: {car.year} {car.model} {car.make}</p>
            <input type="number" value={car.year} onChange={onchange}/>
            <input type="text" value={car.model} onChange={onchange1}/>
            <input type="text" value={car.make} onChange={onchange2}/>
            
        </div>
    );
}

export default CarModel