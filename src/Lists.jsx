import PropTypes from 'prop-types'
function Lists(props){

    // const fruits = [{id:1,name: "Apple",  cal: 90},
    //                {id:2, name: "Pinapple",cal: 45},
    //                {id:3, name: "Mango",   cal: 65},
    //                {id:4, name: "Papaya",  cal: 411}];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); 
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); 
    // fruits.sort((a, b) => a.cal - b.cal); 
    // fruits.sort((a, b) => b.cal - a.cal); 
    // const lowCal = fruits.filter(fruit => fruit.cal<100);
    // const highcal = fruits.filter(fruit => fruit.cal>=100);


    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.cal}</b></li>);
      const itemlist = props.items;
      const category = props.category;
      const listItems = itemlist.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.cal}</b></li>);
    return(<>
    <h3 className="list-category">{category}</h3>
        <ol className="list-item">
        {listItems}
        </ol>
        </>
    );
}
Lists.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,name: PropTypes.string,cal: PropTypes.number}) ),

}
Lists.defaultProps = {
    category: "Category",
    item: [],
}

export default Lists








// import Lists from './Lists'
// const fruits = [{id:1,name: "90",  cal: 90},
//   {id:2, name: "Pinapple",cal: 45},
//   {id:3, name: "Mango",   cal: 65},
//   {id:4, name: "Papaya",  cal: 411}];



// {fruits.length > 0 ? <Lists items = {fruits} category = "Fruits"/>: null}


