import { useState } from "react"

function Todolist(){
    const [todotask, settask] = useState(["Eating in evening","Walking","Sleeping"]);
    const [newTask, setnewtask] = useState("");

    function onchange(event){
        setnewtask(event.target.value);
    }
    function addtask(){
        if(newTask.trim()!==""){
            settask(t => [...t, newTask]);
        setnewtask("");
        }
    }
    function deleteit(index){
        const updatedTask = todotask.filter((_,i) => i!== index);
        settask(updatedTask);

    }
    function upit(index){
        if(index>0){
            const updatedTask = [...todotask,];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];
            settask(updatedTask);
        }
    }
    function downit(index){
        if(index < todotask.length-1){
        const updatedTask = [...todotask,];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]];
            settask(updatedTask);
        }
    }


    return(
        <div className="to-do-list">
            <h1>TO-DO-LIST</h1>
            <div>
            <input type="text" placeholder="Enter your task..." value={newTask} onChange={(event) => onchange(event)}/> <button onClick={addtask} className="add-button">Add to tasks</button>
            </div>
            <ol>
                {todotask.map((task,index) => <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={()=>deleteit(index)}>Delete</button>
                <button className="move-button"onClick={()=>upit(index)}> UP </button>
                <button className="move-button"onClick={()=>downit(index)}> Down </button>

                </li> )}
            </ol>
        </div>
    );

}

export default Todolist