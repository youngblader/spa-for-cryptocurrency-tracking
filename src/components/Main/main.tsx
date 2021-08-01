import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCrypto } from '../../actions/mainActions';
import { Card } from '../../components';
import { IStore } from '../../types/interfaces';

import './main.scss';

const Main: FC = () => {

  const dispatch = useDispatch();

  const crypto = useSelector((state: IStore) => state.main.crypto);

  console.log(crypto);

  useEffect(() => {
    getCrypto(dispatch);
  }, [dispatch]);

  return (
    <div className="container">
      {crypto.map((item: { id: string; name: string; marketCapUsd: string; changePercent24Hr: string; priceUsd: string; }) => {
        return (
          <div key={item.id} >
            <Card 
              name={item.name} 
              marketCapUsd={item.marketCapUsd} 
              changePercent={item.changePercent24Hr}
              price={item.priceUsd}
            />
          </div>
        )
      })}
    </div>
  )
}

export { Main };