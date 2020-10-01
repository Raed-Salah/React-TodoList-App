import React, {Component} from 'react';
import Todoitems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  state = {
    items : [
      {id:1 , name : "Ahmed" , age:22},
      {id:2 , name : "Mohamed" , age:30},
      {id:3 , name : "Manal" , age:50}
    ]
  }

  deleteItem = (id) =>{
   let items = this.state.items;
   let i = items.findIndex(item => item.id === id)
   items.splice(i,1)
   this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items:items})
  }

  render(){
    return(
      <div className="app container">
        <h1 className="text-center">Todo App List </h1>
        <Todoitems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;
