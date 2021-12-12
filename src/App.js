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
    // this.handelChange = this.handelChange.bind(this); // not needed for arrow functions 
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responde => responde.json())
    .then(users => this.setState({monsters: users}));
  }
  handelChange = (e) => {
    this.setState({searchField: e.target.value})
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monter => monter.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox placeholder='Search monster' handelChange={this.handelChange}/>
      <CardList monsters={filteredMonsters} />          
      </div>
    );
  }
  
}

export default App;
