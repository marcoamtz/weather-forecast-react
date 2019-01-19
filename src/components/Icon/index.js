import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

const BrokenClouds = lazy(() => import('./BrokenClouds'));
const ClearSky = lazy(() => import('./ClearSky'));
const FewClouds = lazy(() => import('./FewClouds'));
const Mist = lazy(() => import('./Mist'));
const Rain = lazy(() => import('./Rain'));
const ScatteredClouds = lazy(() => import('./ScatteredClouds'));
const ShowerRain = lazy(() => import('./ShowerRain'));
const Snow = lazy(() => import('./Snow'));
const ThunderStorm = lazy(() => import('./ThunderStorm'));

const Icon = ({ code, ...props }) => {
  let Component;
  switch (code) {
    case '04d':
    case '04n':
      Component = BrokenClouds;
      break;
    case '01d':
    case '01n':
      Component = ClearSky;
      break;
    case '02d':
    case '02n':
      Component = FewClouds;
      break;
    case '50d':
    case '50n':
      Component = Mist;
      break;
    case '10d':
    case '10n':
      Component = Rain;
      break;
    case '03d':
    case '03n':
      Component = ScatteredClouds;
      break;
    case '09d':
    case '09n':
      Component = ShowerRain;
      break;
    case '13d':
    case '13n':
      Component = Snow;
      break;
    case '11d':
    case '11n':
      Component = ThunderStorm;
      break;
    default:
      break;
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};

Icon.propTypes = {
  code: PropTypes.string.isRequired,
  props: PropTypes.object,
};

export default Icon;
