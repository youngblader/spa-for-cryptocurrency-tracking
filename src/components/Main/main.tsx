import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCrypto } from '../../actions/mainActions';
import { Card } from '../../components';
import { IStore } from '../../types/interfaces';

import './main.scss';

const Main: FC = () => {

  const dispatch = useDispatch();
  const crypto = useSelector((state: IStore) => state.main.crypto);

  useEffect(() => {
    getCrypto(dispatch);
  }, [dispatch]);

  return (
    <div className="container">
      {crypto.map((item: { id: string; name: string; marketCapUsd: string; changePercent24Hr: string; priceUsd: string; })  => {
        return (
          <Link
            key={item.id}
            to={`/crypto/${item.name}`.toLowerCase()}
          >
            <div className="card__item">
              <Card
                id={item.id}
                name={item.name} 
                marketCapUsd={item.marketCapUsd} 
                changePercent={item.changePercent24Hr}
                price={item.priceUsd}
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export { Main };