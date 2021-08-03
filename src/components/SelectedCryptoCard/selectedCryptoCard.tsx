import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { IStoreCard } from '../../types/interfaces';
import { ModalWindowWallet } from '../ModalWindowWallet/modalWindowWallet';

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

  const selectedCrypto = useSelector((state: IStoreCard) => state.card.selectedCrypto);
  console.log(selectedCrypto);

  return (
    <>
      <div className="card w-100">
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
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add to wallet</button>
        </div>
      </div>
      <ModalWindowWallet/>
    </>
  )
}

export { SelectedCryptoCard };