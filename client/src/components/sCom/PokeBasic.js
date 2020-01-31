import React, {Component} from 'react';
import '../comcss/pokemon.css';

class PokeBasic extends Component{
  constructor() {
    super();
    //Set default message
    this.state = {
      pokemon: [],
    }
  }

  render(){
    const {name, order, height, weight, egg_groups, hatch, abilities} = this.props;
  return (

        <div class="grid-container-pokemon">
                <div class="grid-item-pokemon">
                    <p class="pro-tit">{name}</p>
                    <p class="pro-tit-num">#{order}</p>
                </div>
                <div class="grid-item-pokemon">
                    {//<div class="type-circ"><img src="drop.png" class="type-img" /></div>
                    }
                </div>
                <div class="grid-item-pokemon">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${order}.png`} class="img-pokemon" />
                </div>
                <div class="grid-item-pokemon">
                    <ul class="profile-ul">
                        <li class="profile-li">
                            <p class="profile-tit">Height</p>
                            <p class="profile-info">{height}m</p>
                        </li>
                        <li class="profile-li">
                            <p class="profile-tit">Weight</p>
                            <p class="profile-info">{weight}kg</p>
                        </li>
                        <li class="profile-li">
                            <p class="profile-tit">Egg groups</p>
                            <p class="profile-info">{egg_groups.map((grp) => grp.name + ', ')}</p>
                        </li>
                        <li class="profile-li">
                            <p class="profile-tit">Hatch steps</p>
                            <p class="profile-info">{hatch * 255}</p>
                        </li>
                        <li class="profile-li">
                            <p class="profile-tit">Abilities</p>
                            <p class="profile-info">
                            {abilities.map((abs) =>
                            abs.ability.name + ', ')}</p> 
                        </li>
                    </ul>
                </div>
            </div>

  );
}
}

export default PokeBasic;
