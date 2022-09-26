import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


class App extends Component {

  constructor(){
    super();
    
    this.state = {
      monsters : [],
      searchInput: ''
    }
  }

 componentDidMount(){
  console.log("componentDidMount");
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => { this.setState(
      () => { 
        return { monsters : users}
      }) 
    })
  }

  onSearchChange = (event) => {
    const inputText = event.target.value.toLocaleLowerCase();
    this.setState( () => {
      return { searchInput: inputText }
    })
  }

  render(){
  const { monsters, searchInput } = this.state;  
  const { onSearchChange } = this; 
  const filtered = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchInput);
  })
  
  return (
    <div className="App">
      <h1 className='App-title'>Monsters</h1>
      <SearchBox 
        onChangeHandler={ onSearchChange } 
        placeholder='monsters'          
        className='search-box'
        />
      
      <CardList 
        monsters={ filtered }/>
    </div>
    );
  }
}
export default App;

