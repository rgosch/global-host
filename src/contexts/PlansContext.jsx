import React, { createContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { getPlans } from 'logic/requests/plans';
import { TEXTS } from 'logic/texts';

export const PlansContext = createContext({});

function PlansProvider({ children }) {
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState(false);
  const [period, setPeriod] = useState(TEXTS.periods[0].id);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getPlans();
      setPlans(data);
      setError(false);
    } catch (_) {
      setError(true);
    }
    setLoading(false);
  }, []);

  const publicValue = {
    fetch,
    plans,
    loading,
    error,
    period,
    setPeriod,
  };

  return (
    <PlansContext.Provider value={publicValue}>
      {children}
    </PlansContext.Provider>
  );
}

PlansProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

PlansProvider.defaultProps = {};

export default PlansProvider;
