import React, { FC } from 'react';
import './card.scss';

type TCryptoCardProps = {
  name: string,
  marketCapUsd: string,
  changePercent: string,
  price: string,
}

const Card: FC<TCryptoCardProps> = (props) => {

  return (
    <>
      <div className="row row-cols-4">
        <div className="col">
          <p>{props.name}</p>
        </div>
        <div className="col">
          <p className="col-text">MKT CAP {parseFloat(props.marketCapUsd).toFixed(3)}</p>
        </div>
        <div className="col">
        <p className="col-text">TOTAL {parseFloat(props.price).toFixed(3)}</p>
        </div>
        <div className="col">
        <p className="col-text">CHP % {parseFloat(props.changePercent).toFixed(2)}</p>
        </div>
        {/* <div className="col-content">
          <button type="button" className="btn btn-primary">Add</button>
        </div> */}
      </div>
    </>
  )
}

export { Card };