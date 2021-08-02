import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Header, SelectedCryptoCard } from '../../components';
import { IStoreCard } from '../../types/interfaces';

import './currentCryptoPage.scss';

const CurrentCryptoPage: FC = () => {

  const selectedCrypto = useSelector((state: IStoreCard) => state.card.selectedCrypto);
  console.log(selectedCrypto);

  return (
    <div className="crypto__page">
      <Header/>
      <div className="crypto__page-content">
        {selectedCrypto.map((item: { id: string; item: any; name: string; marketCapUsd: string; changePercent24Hr: string; priceUsd: string; maxSupply: string; supply: string; rank: string; symbol: string; volumeUsd24Hr: string; vwap24Hr: string; })  => {
          return ( 
            <div key={item.id}>
              <SelectedCryptoCard
                item={item}
                id={item.id}
                name={item.name} 
                marketCapUsd={item.marketCapUsd} 
                changePercent={item.changePercent24Hr}
                price={item.priceUsd}
                maxSupply={item.maxSupply}
                supply={item.supply}
                rank={item.rank}
                symbol={item.symbol}
                volume={item.volumeUsd24Hr}
                vwap={item.vwap24Hr}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { CurrentCryptoPage };