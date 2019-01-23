import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

const Icon = ({ code, ...props }) => {
  let Component;
  switch (code) {
    case '04d':
    case '04n':
      Component = lazy(() => import('./BrokenClouds'));
      break;
    case '01d':
    case '01n':
      Component = lazy(() => import('./ClearSky'));
      break;
    case '02d':
    case '02n':
      Component = lazy(() => import('./FewClouds'));
      break;
    case '50d':
    case '50n':
      Component = lazy(() => import('./Mist'));
      break;
    case '10d':
    case '10n':
      Component = lazy(() => import('./Rain'));
      break;
    case '03d':
    case '03n':
      Component = lazy(() => import('./ScatteredClouds'));
      break;
    case '09d':
    case '09n':
      Component = lazy(() => import('./ShowerRain'));
      break;
    case '13d':
    case '13n':
      Component = lazy(() => import('./Snow'));
      break;
    case '11d':
    case '11n':
      Component = lazy(() => import('./ThunderStorm'));
      break;
    default:
      break;
  }
  return (
    <Suspense fallback={<div>Icon placeholder</div>}>
      <Component {...props} />
    </Suspense>
  );
};

Icon.propTypes = {
  code: PropTypes.string.isRequired,
  props: PropTypes.object,
};

export default Icon;
