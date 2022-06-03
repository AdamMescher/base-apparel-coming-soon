import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;
