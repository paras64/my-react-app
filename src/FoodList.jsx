
import { useState } from "react"

function FoodList(){
    const [food, setFoods] = useState(["Apple","Mango","Banana"]);

    function onclick(){
        const foodname = document.getElementById("food-id").value;
        document.getElementById("food-id").value = "";
        setFoods(f => [...f,foodname]);
    }

    function removeIt(index){
        setFoods(food.filter((_,i) => i!== index ));
    }


    return(

        
        <div>
            <h3>List Of Food</h3>
                <ul>
                    {food.map((food,index) => <li key={index} onClick={() => removeIt(index)}>{food}</li>)}

                </ul>
                <input type="text" id="food-id" placeholder="Enter the food name"/>
                <button onClick={onclick}>Add to food</button>

        </div>
    );
}
export default FoodList