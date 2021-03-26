import Route from '@ember/routing/route';
import { fetch } from 'fetch';

export default class PokemonRoute extends Route {
  model() {
    return fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json()).then(data => {
      for(let pokemon of data.results) {
        return pokemon.name;
      }
    });
  } 
   
}
