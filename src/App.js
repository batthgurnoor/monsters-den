import React,{ Component } from 'react';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component{

  constructor(){
    super();

    this.state = {

      monsters:[],
      searchField:''
    };


  }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters:users}));
  }

  render(){
    const {monsters, searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) );
        
    return(
      <div className='App'>
        <h1> Monsters Den</h1>
        <SearchBox
         placeholder ='search monsters'
         handleChange ={e => this.setState({ searchField: e.target.value}) }>
       </SearchBox>
      
         <CardList monsters={ filteredMonsters }/>
       
      
    </div>
    )
  }
}
export default App;
