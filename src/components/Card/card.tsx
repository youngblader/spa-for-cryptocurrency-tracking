import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../types/interfaces';
import { actionTypes } from '../../types/types';

import './card.scss';

type TCryptoCardProps = {
  id: string;
  name: string;
  marketCapUsd: string,
  changePercent: string,
  price: string,
}

const Card: FC<TCryptoCardProps> = (props) => {

  const dispatch = useDispatch();
  const crypto = useSelector((state: IStore) => state.main.crypto);

  const onSelectedItem = (id: string): void => {
    const selectedItem = crypto.filter((item: any) => item.id === id);

    dispatch({
      type: actionTypes.SELECTED_CRYPTO,
      payload: selectedItem,
    }); 
  }

  return (
    <>
      <div className="row row-cols-4" onClick={() => onSelectedItem(props.id)}>
        <div className="col">
          <p>{props.name}</p>
        </div>
        <div className="col">
          <p className="col-text">MKT CAP {parseFloat(props.marketCapUsd).toFixed(3)}</p>
        </div>
        <div className="col">
          <p className="col-text">LAST {parseFloat(props.price).toFixed(3)} usd</p>
        </div>
        <div className="col">
          <p className="col-text">CHP % {parseFloat(props.changePercent).toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export { Card };