export interface ICrypto {
  crypto: [];
}

export interface IStore {
  main: ICrypto;
}

export interface ISelectedCrypto {
  selectedCrypto: [];
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
  rank: 'rank',
}

export interface ItemsWallet {
  prev: string, 
  cur: string,
  priceUsd: string,
  quantity: string,
  total: number,
}