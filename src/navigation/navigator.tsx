import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CurrentCryptoPage, MainPage } from '../pages';

import { ROUTES } from '../routes/routes';

const Navigator: FC = () =>  {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.MAIN} render={() => <MainPage/>}/>
        <Route path={`${ROUTES.CRYPTO}/:index`} component={CurrentCryptoPage}/>
      </Switch>
    </BrowserRouter>
  )
};

export default Navigator;