import React, {Component} from 'react';
import axios from 'axios';
import PokeBasic from './sCom/PokeBasic';
import {Palette} from 'react-palette';
import {Helmet} from "react-helmet";
import './comcss/pokemon.css';
import EvoStat from './sCom/EvoStat';

class Pokemon extends Component{
  constructor() {
    super();
    //Set default message
    this.state = {
      pokemon: [],
      abilities: [],
      moves: [],
      types: [],
      stats: [],
      pokemon_species: [],
      egg_groups: [],
      evolve: [],
      evolve_1: [],
      description: [],
      poke: window.location.pathname,
    }
  }

  componentDidMount() {
    //GET message from server using fetch api
      axios.all([
        axios.get(`${this.state.poke}`),
        axios.get(`${this.state.poke}/pokemon-species`),
        axios.get(`${this.state.poke}/pokemon-des`)
      ])
      .then(axios.spread((pokeRes, speciesRes, desRes) => {
        const pokemon = pokeRes.data;
        const abilities = pokeRes.data['abilities'];
        const moves = pokeRes.data['moves'];
        const types = pokeRes.data['types'];
        const stats = pokeRes.data['stats'];
        const pokemon_species = speciesRes.data;
        const egg_groups = speciesRes.data['egg_groups'];
        const evo_index = speciesRes.data['evolution_chain'].url;
        const description = desRes.data[0].flavor_text;

        axios.get(`${evo_index.split("/")[evo_index.split("/").length - 2]}/pokemon-evolve`)
        .then(evoRes => {
          const evolve = evoRes.data.chain.evolves_to;
          const evolve_1 = evoRes.data.chain.species;
        this.setState({ evolve, evolve_1});
      })
        this.setState({ pokemon, abilities, moves, types, stats,pokemon_species, egg_groups, description });
        // do something with both responses
      }));
  }


  render(){
  return (
    <div className="all">
          <Palette src={"https://pokeres.bastionbot.org/images/pokemon/"+this.state.pokemon.id+".png"}>
    {({ data} ) => (
            <Helmet>
        <style>{`body { background-color: ${data.lightVibrant};}`}</style>
            </Helmet>
    )}
    </Palette>
        <div className="left">
        <PokeBasic
        name = {this.state.pokemon.name}
        order = {this.state.pokemon.id}
        height = {this.state.pokemon.height}
        weight = {this.state.pokemon.weight}
        egg_groups = {this.state.egg_groups}
        hatch = {this.state.pokemon_species.hatch_counter}
        abilities = {this.state.abilities}
        />
        <EvoStat 
        stats = {this.state.stats}
        evolve = {this.state.evolve}
        evolve_1 = {this.state.evolve_1}
        />
    </div>
    <div className="right">
        <div>
                <h3 class="des-tit">Description</h3>
                <p class="des-txt">
                  {this.state.description}
                </p>
            </div>

    </div>
  </div>
  );
}
}

export default Pokemon;

