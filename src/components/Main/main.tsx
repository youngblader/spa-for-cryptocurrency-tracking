import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCrypto } from '../../actions/mainActions';
import { Card, Pagination, ModalWindowWallet } from '../../components';
import { IStore } from '../../types/interfaces';
import { TCurrentCryptoPageItem } from '../../types/types';

import './main.scss';

const Main: FC = () => {

  const dispatch = useDispatch();

  const crypto = useSelector((state: IStore) => state.main.crypto);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const amountCrypto: number = 10;

  const lastCryptoIndex: number = currentPage * amountCrypto;
  const firstCryptoIndex: number = lastCryptoIndex - amountCrypto;
  const currentCryptoPage: any = crypto.slice(firstCryptoIndex, lastCryptoIndex);

  useEffect(() => {
    getCrypto(dispatch);
  }, [dispatch]);

  const onTogglePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container">
      {currentCryptoPage.map((item: TCurrentCryptoPageItem)  => {
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
      <Pagination totalCryptoItems={crypto.length} amountCrypto={amountCrypto} pagination={onTogglePagination}/>
      <ModalWindowWallet/>
    </div>
  )
}

export { Main };