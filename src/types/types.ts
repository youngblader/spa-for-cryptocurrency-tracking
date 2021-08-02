import { ICrypto, ISelectedCrypto } from "./interfaces";

export enum actionTypes {
  GET_CRYPTO = 'GET_CRYPTO',
  SELECTED_CRYPTO = 'SELECTED_CRYPTO'
}

export type TSelectedCrypto = {
  type: actionTypes.SELECTED_CRYPTO,
  payload: [],
}

export type TGetCryptoAction = {
  type: actionTypes.GET_CRYPTO,
  payload: [],
}

export type TCryptoActions = TGetCryptoAction | TSelectedCrypto;

export type TGetCryptos = (crypto: ICrypto) => TGetCryptoAction;
export type TSelectedCryptoItem = (selectedCrypto: ISelectedCrypto) => TSelectedCrypto;