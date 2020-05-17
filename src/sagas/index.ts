  import { SagaIterator } from "redux-saga";
  import { all, fork } from "redux-saga/effects";
  import { watchGetPokemon } from "./pokemon";
  
  export default function* root(): SagaIterator {
    yield all([
      fork(watchGetPokemon)
    ]);
  }
  