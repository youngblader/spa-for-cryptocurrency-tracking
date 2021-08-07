import React, { FC } from 'react'
import { Link } from 'react-router-dom';

import './pagination.scss';

type TPaginationProps = {
  totalCryptoItems: number;
  amountCrypto: number;
  pagination: (item: number) => void;
}

const Pagination: FC<TPaginationProps> = ({ totalCryptoItems, amountCrypto, pagination }) => {

  const pageNumbers: number[] = [];

  for (let i = 1; i < (totalCryptoItems / amountCrypto); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((item) => {
          return (
            <li className="page-item" key={item}>
              <Link className="page-link" to="/" onClick={() => pagination(item)}>{item}</Link>
            </li>
          )          
        })}
      </ul>
    </div>
  )
}

export { Pagination };
