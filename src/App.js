import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import Search from './components/search/search.controller';

class App extends Component {

  state = {
    monsters: [
    ],
    searchKeyword: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  onSearch = (newSearchKeyword) => {
        this.setState({searchKeyword: newSearchKeyword});
  }

  render () {
    const {monsters, searchKeyword} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchKeyword.toLowerCase()));

    return (
      <div className="App">
        <h1>Mosters Rolodex</h1>
        <Search monsterSearch={this.onSearch}/>
        <CardList monsters={filteredMonsters}/>        
      </div>
    );
  }
}

export default App;
