import React, { Component } from 'react';
import Customers from './components/customers';

class App extends Component {
  render(){
    return(
    <div>
      <h1 className="text-6xl text-purple-500">My react app</h1>
      <Customers />
    </div>
    );
  }
}

export default App;



