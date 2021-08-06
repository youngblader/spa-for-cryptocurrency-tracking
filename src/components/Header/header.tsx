import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { IStore, IStoreWallet, ItemsCrypto, } from '../../types/interfaces';
import { TSummaWallet, TTopCryptos, } from '../../types/types';

import './header.scss';

const Header: FC = () => {

  const crypto: Array<TTopCryptos> = useSelector((state: IStore) => state.main.crypto);
  const wallet: Array<TSummaWallet> = useSelector((state: IStoreWallet) => state.current.wallet);

  const [walletAmount, setWalletAmount] = useState<number>(0);
  const [walletAmountPercent, setWalletAmountPercent] = useState<number>(0);

  const topCryptos = crypto.filter((item): item is ItemsCrypto => parseInt(item.rank) <= 3);

  const calcPercents = useCallback(() => {
    if(wallet.length !== 0) {
      const prevAmount: number = wallet.map(item => item.total).reduce((prev) => prev);
      const nextAmount : number = wallet.map(item => item.total).reduce((prev, next) => prev + next);
      setWalletAmountPercent(((nextAmount - prevAmount) / nextAmount) * 100);
      setWalletAmount(prevAmount);
    }
  }, [wallet]);

  useEffect(() => {
    calcPercents();
  }, [calcPercents]);
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={ROUTES.MAIN} className="navbar-brand">SPA</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {topCryptos.map((item: ItemsCrypto) => {
              return (
                <li key={item.id} className="nav-item">
                  <p className="nav-item__title">{item.name}</p>
                  <span className="nav-item__subtitle">{parseFloat(item.priceUsd).toFixed(3)} USD</span>
                </li>
              )
            })}
          </ul>
          <div className="container-fluid__content">
            <p className="container-fluid__content-title">Мой портфель {wallet.length === 0 ? "0.00" : `${walletAmount.toFixed(2)} USD (${walletAmountPercent.toFixed(2)}%)`}</p>
            <p className="container-fluid__content-subtitle" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Информация о портфеле</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export { Header };