import React, { Component } from 'react'
import TodoInput from './components/todoinput';
import TodoList from './components/todolist';

import 'bootstrap/dist/css/bootstrap.min.css';
import {v1 as uuid} from 'uuid';

class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  };
  handleChange = (e)=>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id:this.state.id,
      title:this.state.item.trim()
    }

    if(newItem.title !== ""){
      const updatedItems = [...this.state.items, newItem];

      this.setState({
        items:updatedItems,
        item:'',
        id:uuid(),
        editItem:false
      })
    }

  };
  clearList = () => {
    this.setState({
      items:[]
    })
  };
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  };
  handleEdit = (id) =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selected = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selected.title,
      editItem:true,
      id:id
    })
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="display-4 text-capitalize text-center"> todo app</h3>
            <TodoInput 
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList 
            items={this.state.items}
            clearList={this.clearList}
            handleDelete = {this.handleDelete}
            handleEdit = {this.handleEdit}/>
          </div>
        </div>
        <footer className="font-weight-light text-center">
        <div className="col-xs-12">
        <p>Made with <span className="h5">&hearts;</span> by Shashank Shirol</p>
        <p>Copyright &copy; 2020 Shashank Shirol. All Rights Reserved.</p>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
