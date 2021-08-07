import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IStoreWallet } from '../../types/interfaces';
import { WalletCard } from '../../components';
import { actionTypes, TModalWindowWallet } from '../../types/types';

const ModalWindowWallet: FC = () => {
  
  const dispatch = useDispatch();
  const wallet = useSelector((state: IStoreWallet) => state.current.wallet);

  useEffect(() => {
    const cryptoCurrency: string | null = localStorage.getItem('cryptoCurrency');
    
    if(cryptoCurrency !== null) {
      const parseCryptoCurrency = JSON.parse(cryptoCurrency);
      if(parseCryptoCurrency?.length) {
        
        dispatch({
          type: actionTypes.ADD_CRYPTO_TO_WALLET,
          payload: [...parseCryptoCurrency],
        });
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('cryptoCurrency', JSON.stringify(wallet));
  }, [wallet]);

  return (
    <div className="container">
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Информация о вашем портфеле</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {wallet?.length ? (
                  <>
                    {wallet.map((item: TModalWindowWallet, index: number) => {
                      return (
                        <div key={item.id} className="card w-100"> 
                          <WalletCard
                            index={index}
                            id={item.id}
                            item={item}
                            name={item.name}
                            price={item.priceUsd}
                            quantity={item.quantity}
                            symbol={item.symbol}
                          /> 
                        </div>                    
                      )
                    })} 
                  </>
                ) : (
                  <span>У вас нет криптовалюты</span> 
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export { ModalWindowWallet };