import React, { Component } from 'react';

import { CardList } from  './components/card-list/card-list.component';
//import logo from './logo.svg';
import './App.css';

import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{

        constructor() {
            super();

            this.state = {
                monsters: [],
                searchField: ''
            };
        }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }));
    } 

    handleChange = e =>{
        this.setState({ searchField: e.target.value})
    }
    render(){
        const{ monsters,searchField } = this.state;
        // const monsters = this.state.monsters;
        // const searchField = this.state.searchField; this can be write by using filtered

        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchField.toLowerCase()) );

        return(
            <div className='App'>
                <h1> Monsters Rolodex </h1>
                {/* <input type='search' placeholder='Search Monster'
                 onChange={e => this.setState({ searchField: e.target.value})} /> instead of input we used search */}
            <SearchBox 
                 
                 placeholder='Search Monster'
                 handleChange={ this.handleChange }
            />

                <CardList monsters={ filteredMonsters }>
                   {/* <h1>yihua</h1> */}
                   {/* //code here is moved to prop.children  */}
                </CardList>
              
            </div>

        );
    }
}
export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Kumarikeerti

//         </a>
//       </header>
//     </div>
//   );
// }


