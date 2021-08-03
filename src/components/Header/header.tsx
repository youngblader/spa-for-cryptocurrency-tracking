import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import { IStoreWallet } from '../../types/interfaces';
import './header.scss';

const Header: FC = () => {
  const wallet = useSelector((state: IStoreWallet) => state.current.wallet); 
  
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <Link to={ROUTES.MAIN} className="navbar-brand">SPA</Link>
        <div className="container-fluid__content">
          <p className=" container-fluid__content-title">Мой портфель</p>
          <p className="container-fluid__content-subtitle" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Информация о портфеле</p>
        </div>
      </div>
    </nav>
  )
}

export { Header };