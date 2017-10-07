import React, { Component } from 'react';


import CardsList from './components/CardsList';
import Form from './components/Form';

import { list } from './list'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  onHandleSubmit(from, to) {
    const arr = this.state.list
    // arr.push([from, to]);
    // this.setState({
    //   list: arr
    // })
    this.setState({
      list: [...this.state.list, [from, to]]
    })
  }

  render() {
    
    return (
      <div className="container">
        <Form onSubmit={this.onHandleSubmit}/>
        <CardsList data={this.state.list}/>
      </div>
    );
  }
}

export default App;
