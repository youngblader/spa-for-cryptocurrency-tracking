import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreWallet } from '../../types/interfaces';
import { actionTypes } from '../../types/types';

import './modalInputCrypto.scss';

type TModalInputCryptoProps = {
  item: any,
  name: string,
  symbol: string,
  price: string,
}

const ModalInputCrypto: FC<TModalInputCryptoProps> = (props) => {

  const dispatch = useDispatch();
  const [quantityCrypto, setQuantityCrypto] = useState<string>('');
  const wallet = useSelector((state: IStoreWallet) => state.current.wallet);
  
  const onChangeFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityCrypto(event.target.value);
  }

  const addCryptoCurrency = (item: []) => {
    if(quantityCrypto === '') {
      alert('You have not entered the desired amount.');
    } else {
      dispatch({
        type: actionTypes.ADD_CRYPTO_TO_WALLET,
        payload: [...wallet, {...item, quantity: quantityCrypto, total: parseFloat(props.price) * parseFloat(quantityCrypto)}]
      });
      localStorage.setItem('cryptoCurrency', JSON.stringify([...wallet, item]));
    }
  }

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Buy cryptocurrency</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="modal-body__content"> 
                <h2>{props.name}</h2>
                <span className="modal-body__content-text">{props.symbol}</span>
              </div>             
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">Enter the desired quantity:</label>
                  <input type="text" className="form-control" id="recipient-name" onChange={(event) => onChangeFieldValue(event)} value={quantityCrypto}></input>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={() => addCryptoCurrency(props.item)}>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { ModalInputCrypto };