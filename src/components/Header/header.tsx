import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import './header.scss';

const Header: FC = () => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <Link to={ROUTES.MAIN} className="navbar-brand">SPA</Link>
        <div className="container-fluid__content">
          <p className=" container-fluid__content-title">Мой портфель</p>
          <Link to={ROUTES.WALLET} className="container-fluid__content-subtitle">Информация о портфеле</Link>         
        </div>
      </div>
    </nav>
  )
}

export { Header };