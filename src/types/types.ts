import { ICrypto } from "./interfaces";

export enum actionTypes {
  GET_CRYPTO = 'GET_CRYPTO',
}

export type TGetCryptoAction = {
  type: actionTypes.GET_CRYPTO,
  payload: [],
}

export type TCryptoActions = TGetCryptoAction;

export type TGetCryptos = (crypto: ICrypto) => TGetCryptoAction;