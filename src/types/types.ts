import { ICrypto, ICurrentCrypto, ISelectedCrypto } from "./interfaces";

export enum actionTypes {
  GET_CRYPTO = 'GET_CRYPTO',
  SELECTED_CRYPTO = 'SELECTED_CRYPTO',
  ADD_CRYPTO_TO_WALLET = 'ADD_CRYPTO_TO_WALLET',
}

export type TGetCryptoAction = {
  type: actionTypes.GET_CRYPTO,
  payload: [],
}

export type TSelectedCrypto = {
  type: actionTypes.SELECTED_CRYPTO,
  payload: [],
}

export type TAddCrypto = {
  type: actionTypes.ADD_CRYPTO_TO_WALLET,
  payload: [],
}

export type TCryptoActions = TGetCryptoAction | TSelectedCrypto | TAddCrypto;

export type TGetCryptos = (crypto: ICrypto) => TGetCryptoAction;
export type TSelectedCryptoItem = (selectedCrypto: ISelectedCrypto) => TSelectedCrypto;
export type TCurrentCryptoCurrency = (wallet: ICurrentCrypto) => ICurrentCrypto;