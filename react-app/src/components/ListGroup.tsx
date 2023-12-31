import { MouseEvent } from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    const handleClick = (event:MouseEvent) => console.log(event);


    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}{/*  items.length === 0 ? <p>No item found</p> : null */}
            <ul className="list-group">
                {items.map((item,index) => <li key={item} 
                                       className="list-group-item" onClick={handleClick}>{item}</li>)}
            </ul>
        </>
    );
}

export default ListGroup;