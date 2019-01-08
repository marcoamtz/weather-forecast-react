import React from 'react';
import PropTypes from 'prop-types';
import BrokenClouds from './BrokenClouds';
import ClearSky from './ClearSky';
import FewClouds from './FewClouds';
import Mist from './Mist';
import Rain from './Rain';
import ScatteredClouds from './ScatteredClouds';
import ShowerRain from './ShowerRain';
import Snow from './Snow';
import ThunderStorm from './ThunderStorm';

const Icon = ({ code, ...props }) => {
  switch (code) {
    case '04d':
    case '04n':
      return <BrokenClouds {...props} />;
    case '01d':
    case '01n':
      return <ClearSky {...props} />;
    case '02d':
    case '02n':
      return <FewClouds {...props} />;
    case '50d':
    case '50n':
      return <Mist {...props} />;
    case '10d':
    case '10n':
      return <Rain {...props} />;
    case '03d':
    case '03n':
      return <ScatteredClouds {...props} />;
    case '09d':
    case '09n':
      return <ShowerRain {...props} />;
    case '13d':
    case '13n':
      return <Snow {...props} />;
    case '11d':
    case '11n':
      return <ThunderStorm {...props} />;
    default:
      return;
  }
};

Icon.propTypes = {
  code: PropTypes.string.isRequired,
  props: PropTypes.object,
};

export default Icon;
