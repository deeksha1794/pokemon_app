import { defineRequestType, RequestType, StandardAction } from "./action";

export const GET_POKEMON: RequestType = defineRequestType("GET_POKEMON");
export const CREATE_POKEMON: RequestType = defineRequestType("CREATE_POKEMON");
export const DELETE_POKEMON: RequestType = defineRequestType("DELETE_POKEMON");
export const EDIT_POKEMON: RequestType = defineRequestType("EDIT_POKEMON");

export const getPokemons = {
  request: (): StandardAction => {
    return {
      type: GET_POKEMON.REQUEST,
      payload: {}
    };
  },
  success: (pokemons: any): StandardAction => {
    return {
      type: GET_POKEMON.SUCCESS,
      payload: {
        pokemons
      }
    };
  },
  failure: (error: Error): StandardAction => {
    return {
      type: GET_POKEMON.FAILURE,
      payload: {
        error
      }
    };
  }
};

export const createPokemon = {
  request: (pokemon: any): StandardAction => {
    return {
      type: CREATE_POKEMON.REQUEST,
      payload: {
        pokemon
      }
    };
  },
  success: (pokemon: any): StandardAction => {
    return {
      type: CREATE_POKEMON.SUCCESS,
      payload: {
        pokemon
      }
    };
  },
  failure: (error: Error): StandardAction => {
    return {
      type: CREATE_POKEMON.FAILURE,
      payload: {
        error
      }
    };
  }
};

export const deletePokemon = {
  request: (id: string): StandardAction => {
    return {
      type: DELETE_POKEMON.REQUEST,
      payload: {
        id
      }
    };
  },
  success: (id: string, deleted: boolean): StandardAction => {
    return {
      type: DELETE_POKEMON.SUCCESS,
      payload: {
        id,
        deleted
      }
    };
  },
  failure: (error: Error): StandardAction => {
    return {
      type: DELETE_POKEMON.FAILURE,
      payload: {
        error
      }
    };
  }
};

export const editPokemon = {
  request: (pokemon: any): StandardAction => {
    return {
      type: EDIT_POKEMON.REQUEST,
      payload: {
        pokemon
      }
    };
  },
  success: (pokemon: any): StandardAction => {
    return {
      type: EDIT_POKEMON.SUCCESS,
      payload: {
        pokemon
      }
    };
  },
  failure: (error: Error): StandardAction => {
    return {
      type: EDIT_POKEMON.FAILURE,
      payload: {
        error
      }
    };
  }
};
