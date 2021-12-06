import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }: any) {
  useEffect(() => {
    const unlisten = history.listen(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 300)
    });
    return () => {
      unlisten();
    }
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);