import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreWallet } from '../../types/interfaces';
import { actionTypes } from '../../types/types';

import './selectedCryptoCard.scss';

type TSelectedCryptoCardProps = {
  item: any,
  id: string,
  name: string,
  marketCapUsd: string,
  changePercent: string,
  price: string,
  maxSupply: string,
  supply: string,
  rank: string,
  symbol: string,
  volume: string,
  vwap: string,
}

const SelectedCryptoCard: FC<TSelectedCryptoCardProps> = (props) => {
 
  const dispatch = useDispatch();
  const wallet = useSelector((state: IStoreWallet) => state.current.wallet);

  const addCryptoCurrency = (item: []) => {
    dispatch({
      type: actionTypes.ADD_CRYPTO_TO_WALLET,
      payload: [...wallet, item]
    });
  }

  console.log(wallet);

  return (
    <>
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Raiting cryptocurrency: {props.rank}</p>
          <p className="card-text">CHP % {parseFloat(props.changePercent).toFixed(2)}</p>
          <p className="card-text">MKT CAP {parseFloat(props.marketCapUsd).toFixed(3)}</p>
          <p className="card-text">MaxSupply {parseFloat(props.maxSupply).toFixed(3)}</p>
          <p className="card-text">Supply {parseFloat(props.supply).toFixed(3)}</p>
          <p className="card-text">Symbol cryptocurrency: {props.symbol}</p>
          <p className="card-text">VolumeUsd24Hr: {parseFloat(props.volume).toFixed(3)}</p>
          <p className="card-text">Vwap24Hr: {parseFloat(props.vwap).toFixed(3)}</p>
          <button className="btn btn-primary" onClick={() => addCryptoCurrency(props.item)}>Добавить в мой портфель</button>
        </div>
      </div>
    </>
  )
}

export { SelectedCryptoCard };