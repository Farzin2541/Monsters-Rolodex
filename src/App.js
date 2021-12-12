import React, { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responde => responde.json())
    .then(users => this.setState({monsters: users}));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monter => monter.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <SearchBox placeholder='Search monster' handelChange={(e) => this.setState({searchField: e.target.value})}/>
      <CardList monsters={filteredMonsters} />          
      </div>
    );
  }
  
}

export default App;
