import { ICrypto, ICurrentCrypto, ISelectedCrypto, ItemsCrypto, ItemsWallet, } from "./interfaces";

export enum actionTypes {
  GET_CRYPTO = 'GET_CRYPTO',
  SELECTED_CRYPTO = 'SELECTED_CRYPTO',
  ADD_CRYPTO_TO_WALLET = 'ADD_CRYPTO_TO_WALLET',
  DELETE_CRYPTO = 'DELETE_CRYPTO',
  GET_GRAPHS_ITEMS = 'GET_GRAPHS_ITEMS',
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

export type TDeleteCrypto = {
  type: actionTypes.DELETE_CRYPTO,
  payload: [],
}

export type TGetGraphItems = {
  type: actionTypes.GET_GRAPHS_ITEMS,
  payload: [],
}



export type TTopCryptos = ItemsCrypto;
export type TSummaWallet = ItemsWallet;

export type TCryptoActions = TGetCryptoAction | TSelectedCrypto | TAddCrypto | TDeleteCrypto | TGetGraphItems;

export type TGetCryptos = (crypto: ICrypto) => TGetCryptoAction;
export type TSelectedCryptoItem = (selectedCrypto: ISelectedCrypto) => TSelectedCrypto;
export type TCurrentCryptoCurrency = (wallet: ICurrentCrypto) => ICurrentCrypto;
export type TDeleteWalletCurrency = (wallet: ICurrentCrypto) => ICurrentCrypto;
export type TGetGraphsItems = (getGraphsItems: ISelectedCrypto) => ISelectedCrypto;