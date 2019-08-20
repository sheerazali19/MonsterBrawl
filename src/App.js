import React,{Component} from 'react';
import './App.css';
import { Cardlist } from '../src/components/cardlist/cardlist.component';
import { SearchBox } from '../src/components/searchBox/searchBox.component';
class App extends Component {
  constructor(){
    super();
    this.state = { 
      monsters:[],
      searchfield: ''
  }}

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( { monsters: users }))
  }
  
  render(){
    const {monsters, searchfield} = this.state;
    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return(
    <div className="App">
      <h1>Monsters Brawl</h1>
      <SearchBox  placeholder='search monsters' handleChange={e => this.setState({searchfield:e.target.value})}/>
      <Cardlist monsters={filterdMonsters}></Cardlist>
    </div>
    )
  }
}

export default App;
