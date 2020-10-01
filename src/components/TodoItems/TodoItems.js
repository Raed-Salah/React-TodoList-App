import React from 'react';
// import "../../index.css"

const TodoItems = (props) => {
    const {items , deleteItem} = props;
    const length = items.length;
    const listitems = length ? ( items.map( item => {
        return (
           <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>    
           </div>
        )
    })
    ) : (
        <p> there is NO item to show </p>
        )

    return(
        <div className="todoitems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
           {listitems}
        </div>
    )
}
export default TodoItems