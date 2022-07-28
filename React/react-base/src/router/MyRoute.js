import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;
  const location = useLocation();

  return !isLoggedIn && isClosed ? (
    <Component {...rest} />
  ) : (
    <Navigate to={`/login/${location.search}`} replace state={{ location }} />
  );
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
