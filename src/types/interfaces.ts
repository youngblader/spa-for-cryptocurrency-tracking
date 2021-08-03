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