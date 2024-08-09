import React, {useState} from 'react';
function Colorpicker(){

    const [color, colorchange] = useState("");
    function onchange(event){
        colorchange(event.target.value);
    }


    return(
        <div >
            
            <div style={{backgroundColor: color}}>
            Selected color: {color}
            </div>
            <div>
            <label><input type="color" value="color" onChange={onchange}/></label>
            </div>
            
        </div>
        
    );

}
export default Colorpicker