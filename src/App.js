import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemons: [],
      sightings: [],
      error: null
    }
    this.getPokemon()
  }
  
  getPokemon = () => {
    fetch("http://34.210.16.117:8080/pokemons")
    .then((resp) => {
      return resp.json()
    })
    .then((pokemons) => {
      this.setState({pokemons})
    })
    .catch((error)=>{
      this.setState({ error: `Sorry, there was a problem.  ${error.message}`})
    })
  }
  
  render(){
    const {pokemons, sightings, error} = this.state
    return(
      <div className = "App">
        <h1>Your Pokedex</h1>
        {error &&
          <div>
            <strong>{error}</strong>
          </div>
        }
        <ul>
          {pokemons.map((pokemon) => {
            return(
            <li>{pokemon.common_name}</li>
            )
          })}
        </ul>
      </div>
      );
  }
}
