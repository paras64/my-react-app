import { useState } from "react"

function Cars(){
    const [cars, setCars] = useState([]);
    const [Caryear, setCaryear] = useState(new Date().getFullYear());
    const [Carmake, setCarmake] = useState("");
    const [Carmodel, setCarmodel] = useState("");
    function add(){
    const newCar = {year: Caryear,
                    make: Carmake,
                    model: Carmodel
     };
     setCars(c => [...c, newCar]);
     setCarmake("");
     setCarmodel("");
     setCaryear(new Date().getFullYear());
    }

     

    function onchangeyear(event){
        setCaryear(event.target.value);
    }
    function onchangename(event){
        setCarmake(event.target.value);
    }
    function onchangemodel(event){
        setCarmodel(event.target.value);
    }
    function onremove(index){
        setCars(c => cars.filter((_,i) => i!==index));
    }




    return(
        <div>
            <h3>List of Car Objects</h3>
            <ul>
                {cars.map((cars,index) => <li  key={index} onClick={() => onremove(index)}>{cars.year} {cars.make} {cars.model}</li>) }

            </ul>
            <input type="number" value={Caryear} onChange={(event) => onchangeyear(event)} />
            <br/>
            <input type="text" value={Carmake} placeholder="Enter Car Make" onChange={(event)=>onchangename(event)}/>
            <br/>
            <input type="text" value={Carmodel} placeholder="Enter Car Model" onChange={(event)=>onchangemodel(event)}/>
            <br/>
            <button onClick={add}>Add</button>

        </div>
    );

}
export default Cars