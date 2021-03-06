import { mount as marketingMount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = marketingMount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        if (history.location.pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
