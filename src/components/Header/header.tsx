import React, { FC } from 'react';
import './header.scss';

const Header: FC = () => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">SPA</a>
        <div className="container-fluid__content">
          <p className="container-fluid__content-title">Мой портфель</p>
          <span className="container-fluid__content-subtitle">Информация о портфеле</span>
        </div>
      </div>
    </nav>
  )
}

export { Header };