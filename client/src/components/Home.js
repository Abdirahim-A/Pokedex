import React, {Component} from 'react';
import {Palette} from 'react-palette';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import './comcss/pokedex.css';
import Pokedex from './Pokedex';

class Home extends Component{
  constructor() {
    super();
    //Set default message
    this.state = {
      pokemon: [],
      bg: 'FEFEFE',
      txt: 'black',
    }
    this.dark = this.dark.bind(this);
    this.light = this.light.bind(this);
  }
  

  componentDidMount() {
    //GET message from server using fetch api 
      axios.get('https://europe-west2-pokedex-f895a.cloudfunctions.net/app/allPokemon.json')
      .then(res => {
        const pokemon = res.data['results'];
        this.setState({ pokemon });
      })
  }

  light() {
    this.setState(state => ({
      bg: 'FEFEFE',
      txt: 'black'
    }));
  }

  dark() {
    this.setState(state => ({
      bg: '1E1E1E',
      txt: 'white'
    }));
  }


  render(){
  return (
    <div class="all-contact-div">
      
            <Helmet>
        <style>{'body { background-color: #'+this.state.bg+';} *{color: '+this.state.txt+'}'}</style>
            </Helmet>

    <div class="top">
      <div className="top-item"><h1 class="about-but">About</h1></div>
      <div className="top-item"><h1 class="home-tit">Pokedex</h1></div>
      <div className="top-item"><button onClick={this.dark} class="theme-but">Dark</button> <button onClick={this.light} class="theme-but">Light</button></div>
        <div class="theme"> </div>
    </div>
    <div>
    <div class="grid-container">
    {this.state.pokemon.map((key =>
    <Pokedex  
        key={key.name}
        name={key.name}
        url={key.url}
        />
    ))}
        </div>
    </div>

  </div>
  );
}
}

export default Home;
