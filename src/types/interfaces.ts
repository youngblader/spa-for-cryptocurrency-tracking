export interface ICrypto {
  crypto: [];
}

export interface IStore {
  main: ICrypto;
}

export interface ISelectedCrypto {
  selectedCrypto: [],
  getGraphsItems: [],
}

export interface IStoreCard {
  card: ISelectedCrypto;
}

export interface ICurrentCrypto {
  wallet: [];
}

export interface IStoreWallet {
  current: ICurrentCrypto;
}

export interface ItemsCrypto {
  id: string, 
  name: string,
  priceUsd: string,
  rank: string,
  date: string,
  getGraphsItems: string | number;
}

export interface ItemsWallet {
  priceUsd: string,
  quantity: string,
  total: number,
  reduce: number,
}