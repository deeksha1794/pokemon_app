  import { SagaIterator } from "redux-saga";
  import { all, fork } from "redux-saga/effects";
  import { watchGetPokemon, watchDeletePokemon, watchCreateItem } from "./pokemon";
  
  export default function* root(): SagaIterator {
    yield all([
      fork(watchGetPokemon),
      fork(watchDeletePokemon),
      fork(watchCreateItem)
    ]);
  }
  