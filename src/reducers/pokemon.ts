import { GET_POKEMON, DELETE_POKEMON, EDIT_POKEMON, CREATE_POKEMON } from "../action/pokemon";
import { RequestState } from "./reducers";

export interface PokemonState extends RequestState {
  pokemon?: any;
  pokemons?: any;
}

const INITIAL_STATE: PokemonState = {};

export default (state: PokemonState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CREATE_POKEMON.REQUEST:
    case DELETE_POKEMON.REQUEST:
    case GET_POKEMON.REQUEST:
      return Object.assign({}, state, { inProgress: true });

    case EDIT_POKEMON.REQUEST:
      return Object.assign({}, state, action.payload, { inProgress: false, error: undefined });

    case GET_POKEMON.SUCCESS:
      return Object.assign({}, state, action.payload, { inProgress: false, error: undefined });

    case CREATE_POKEMON.SUCCESS:
      const { pokemon } = action.payload;
      if (state.pokemons) {
        state.pokemons.splice(0, 0, pokemon);
        return Object.assign({}, state, { inProgress: false, error: undefined });
      }
      break;
    case DELETE_POKEMON.SUCCESS:
      const { id } = action.payload;
      state.pokemons.filter((data) => {
      return data.pkdx_id === id && state.pokemons.splice(state.pokemons.indexOf(data), 1)
      })
      return Object.assign({}, state, { inProgress: false, error: undefined });

    case CREATE_POKEMON.FAILURE:
    case DELETE_POKEMON.FAILURE:
    case GET_POKEMON.FAILURE:
    case EDIT_POKEMON.FAILURE:
      return Object.assign({}, state, action.payload, { inProgress: false });
    default:
      return state;
  }
};
