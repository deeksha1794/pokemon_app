import { RequestType, StandardAction } from "../action/action";

export interface RequestState {
  inProgress?: boolean;
  error?: Error;
  loadError?: Error;
}

/**
 * This is an experimental approach to a generic reducer for a request-response pattern of actions that
 * results in some entity being set in state or a failure.
 * @param requestType
 * @param initialState
 * @returns {(state:T, action:Action)=>T}
 */
export function createRequestReducer<T>(requestType: RequestType, initialState: T): any {
  return (state: T = initialState, action: StandardAction): T => {
    switch (action.type) {
      case requestType.REQUEST:
        return Object.assign({}, initialState, { inProgress: true });
      case requestType.SUCCESS:
        return Object.assign({}, state, action.payload, { inProgress: false });
      case requestType.FAILURE:
        return Object.assign({}, initialState, action.payload);
      default:
        return state;
    }
  };
}
