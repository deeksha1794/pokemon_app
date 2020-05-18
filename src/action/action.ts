import { Action } from "redux";

export interface RequestType {

  REQUEST: string;

  SUCCESS: string;

  FAILURE: string;
}

export interface StandardAction extends Action {

  payload?: any;
}

export type ActionCreator = (...args: any[]) => StandardAction;


export function defineRequestType(base: string): RequestType {
  return ["REQUEST", "SUCCESS", "FAILURE"].reduce<RequestType>((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {} as RequestType);
}
