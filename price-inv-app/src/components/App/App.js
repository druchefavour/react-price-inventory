import React, { Component } from 'react';
import './App.css';
import DefaultHeader from './../Default-Header/Default-Header';
import AppTable from './../App-Table/App-Table';

class App extends Component {
  constructor (props) {
    super(props);
    
  }
  render() {
    return (
      <div>
        <DefaultHeader />
        <br  />
        <AppTable />
      </div>
    );
  }
}

export default App;
