
function Profilepic(){
    const imgURL = './src/assests/react.svg';
    const onclick = (e) => e.target.style.display = "none";
    return(

        <img onClick={(e) => onclick(e)} src="pic"/>

    );
}

export default Profilepic