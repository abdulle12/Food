import { useState } from "react";


interface props {
    items:string[];
    heading:string;
    onSelectItem:(item:string)=>void;
}

function ListGroup({items,heading,onSelectItem}:props) {
 
  
  const[selectedIndex,setselectedIndex]  =useState(-1)

  return (
    <>
      <h1>{heading}</h1>

      <ul className="list-group ">
        {items.length == 0 ? <p>No item</p> : null}
        {items.map((item,index) => (
          <li className={selectedIndex === index? "list-group-item active":"list-group-item "} key={item}
          onClick={()=> {setselectedIndex(index);
          onSelectItem(item);}}>{item};
          
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
