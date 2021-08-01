import React, { FC } from 'react';
import './card.scss';

type TCryptoCardProps = {
  name: string,
}

const Card: FC<TCryptoCardProps> = (props) => {

  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <p>{props.name}</p>
          <button type="button" className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  )
}

export { Card };