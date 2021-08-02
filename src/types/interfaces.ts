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