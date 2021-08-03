import React, { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IStoreWallet } from '../../types/interfaces';
import { actionTypes } from '../../types/types';

import './walletCard.scss';

type TWalletCardProps = {
  index: number,
  id: string,
  item: any,
  name: string,
  price: string,
  quantity: string,
  symbol: string,
}

const WalletCard: FC<TWalletCardProps> = (props) => {

  const dispatch = useDispatch();
  const wallet = useSelector((state: IStoreWallet) => state.current.wallet);
  
  const deleteCryptoCurrency = useCallback((index: number) => {
    wallet.splice(index, 1);

    dispatch({
      type: actionTypes.DELETE_CRYPTO,
      payload: [...wallet],
    });
    
  }, [wallet, dispatch]);

  return (
    <>
      <h5 className="card-title">{props.name}</h5>  
      <div className="card-quantity">
        <span className="card-text">{props.quantity}</span>
        <span className="card-text-symbol">{props.symbol}</span>
      </div>
      <span className="card-text">{parseFloat(props.price).toFixed(3)} USD</span>
      <div>
        <button type="button" className="btn-close" aria-label="Close" onClick={() => deleteCryptoCurrency(props.index)}></button>
      </div>
    </>
  )
}

export { WalletCard };
