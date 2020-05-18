import { call, put, takeEvery, select } from "redux-saga/effects";

import { SagaIterator } from "redux-saga";

import { GET_POKEMON, getPokemons, deletePokemon, DELETE_POKEMON } from "../action/pokemon";


declare const fetch: any;

function createServiceUrlSelector(service: string): (state: any) => string {
  const url = service;

  return (state: any): string => url;
}

const getServiceUrl = createServiceUrlSelector("http://localhost:4000/pokemones");

function fetchPokemons(serviceUrl: any): any {
  return fetch(serviceUrl)
    .then((response: any) => response.json())
    .then((responseJson: any) => {
      if (!responseJson.statusCode) {
        return responseJson;
      } else {
        throw new Error(responseJson.message);
      }
    })
    .catch((error: Error) => {
      throw new Error(error.message);
    });
}

function deletePokemonValue(serviceUrl: any, id: string): any {
  return fetch(serviceUrl + `/${id}`, {

    method: "DELETE"
  }).then((response: any) => response.json())
    .then((responseJson: any) => {
      if (!responseJson.statusCode) {
        return responseJson;
      } else {
        throw new Error(responseJson.message);
      }
    })
    .catch((error: Error) => {
      throw new Error(error.message);
    });
}

export function* getAll(action: any): IterableIterator<{}> {
  const serviceUrl = yield select(getServiceUrl);

  try {
    const pokemons = yield call(fetchPokemons, serviceUrl)
    yield put(getPokemons.success(pokemons));
  } catch (e) {
    yield put(getPokemons.failure(e));
  }
}


export function* deleteOne(action: any): IterableIterator<{}> {
  const { id } = action.payload;
  const serviceUrl = yield select(getServiceUrl);

  try {
    const deleted = yield call(deletePokemonValue, serviceUrl, id);
    yield put(deletePokemon.success(id, deleted || true));
  } catch (e) {
    yield put(deletePokemon.failure(e));
  }
}

export function* watchGetPokemon(): SagaIterator {
  yield takeEvery(GET_POKEMON.REQUEST, getAll);
}


export function* watchDeletePokemon(): SagaIterator {
  yield takeEvery(DELETE_POKEMON.REQUEST, deleteOne);
}
