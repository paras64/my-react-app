import React, {useState} from 'react';
function MyComponent() {

    const [name, setName] = useState("Guest");
    const [payment, selecPaymnent] = useState("");
    const [enterAddres, changeAddress] = useState("");
    const [shipping, changemode] = useState("");
    const onchange = (event) => {
        setName(event.target.value);
    }

    const onchange2 = (event) => {
        selecPaymnent(event.target.value);
    }

    const onchange3 = (event) =>{
        changeAddress(event.target.value);
    }

    const onchange4 = (event) =>{
        changemode(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={onchange} />
            <p>Name: {name}</p>
            <select value={payment} onChange={onchange2}>
                <option value="">Select option</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Visa">Visa</option>
            </select>
            <div>
            <textarea value={enterAddres} onChange={onchange3}>Enter Your Address</textarea>
            </div>
            <br></br>

        <label>
            <input type="radio" value="Pich UP" checked={shipping === "Pich UP"} onChange={onchange4}/>  Pick UP     </label>
            <label><input type="radio" value="delivery" checked={shipping === "delivery"} onChange={onchange4} />delivery</label>
        </div>

    );
}
export default MyComponent