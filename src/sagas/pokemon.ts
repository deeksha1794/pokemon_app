import { call, put, takeEvery, select } from "redux-saga/effects";

import { SagaIterator } from "redux-saga";

import { GET_POKEMON, getPokemons} from "../action/pokemon";


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
// function createPokemonValue(serviceUrl: string, pokemon: any): any {
//   return fetch(serviceUrl + "/v3/items", {
//     method: "POST",
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(pokemon)
//   }).then((response: any) => response.json())
//     .then((responseJson: any) => {
//       if (!responseJson.statusCode) {
//         return responseJson;
//       } else {
//         throw new Error(responseJson.message);
//       }
//     })
//     .catch((error: Error) => {
//       throw new Error(error.message);
//     });
// }

// function deleteItemValue(serviceUrl: string, id: string): any {
//   return fetch(serviceUrl + "/v3/items/" + id + "?cascade=true", {
//     method: "DELETE"
//   }).then((response: any) => response.json())
//     .then((responseJson: any) => {
//       if (!responseJson.statusCode) {
//         return responseJson;
//       } else {
//         throw new Error(responseJson.message);
//       }
//     })
//     .catch((error: Error) => {
//       throw new Error(error.message);
//     });
// }

export function* getAll(action: any): IterableIterator<{}> {
  const serviceUrl = yield select(getServiceUrl);

  try {
    const pokemons = yield call(fetchPokemons, serviceUrl)
    yield put(getPokemons.success( pokemons));
  } catch (e) {
    yield put(getPokemons.failure(e));
  }
}

// export function* createOne(action: any): IterableIterator<{}> {
//   const { item } = action.payload;
//   const serviceUrl = yield select(getServiceUrl);

//   try {
//     const value = yield call(createItemValue, serviceUrl, item);
//     yield put(createItem.success( value ));
//   } catch (e) {
//     yield put(createItem.failure(e));
//   }
// }

// export function* saveOne(action: any): IterableIterator<{}> {
//   const { item } = action.payload;
//   const serviceUrl = yield select(getServiceUrl);

//   try {
//     const value = yield call(saveItemValue, serviceUrl, item);
//     yield put(saveItem.success( value ));
//   } catch (e) {
//     yield put(saveItem.failure(e));
//   }
// }

// export function* deleteOne(action: any): IterableIterator<{}> {
//   const { id } = action.payload;
//   const serviceUrl = yield select(getServiceUrl);

//   try {
//     const deleted = yield call(deleteItemValue, serviceUrl, id);
//     yield put(deleteItem.success( id, deleted || 1 ));
//   } catch (e) {
//     yield put(deleteItem.failure(e));
//   }
// }

export function* watchGetPokemon(): SagaIterator {
  yield takeEvery(GET_POKEMON.REQUEST, getAll);
}
// export function* watchCreateItem(): SagaIterator {
//   yield takeEvery(CREATE_POKEMON.REQUEST, createOne);
// }

// export function* watchDeleteItem(): SagaIterator {
//   yield takeEvery(DELETE_POKEMON.REQUEST, deleteOne);
// }
