import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ROUTES } from 'logic/constants';

const Main = lazy(() => import('pages/Main'));

function Routes() {
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route>
          <Main path={ROUTES.MAIN} />
        </Route>
      </Switch>
    </Suspense>
  );
}

Routes.propTypes = {};

Routes.defaultProps = {};

export default Routes;
