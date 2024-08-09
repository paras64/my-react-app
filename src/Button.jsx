function Button(){
    var count = 0;
    const clickhandler = (name) => {

        
        if(count<3){
        console.log(`${name} Try Again ${count}`);
        count++;
        }
        else{
            console.log(`You are arogant`);
        }
    }


    return(<button onClick={() => clickhandler("Bro")}>Click me</button>);
}

export default Button