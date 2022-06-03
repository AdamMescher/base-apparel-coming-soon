import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
};
export default config;
