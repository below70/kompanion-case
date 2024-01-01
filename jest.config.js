const config = {
  preset: 'react-native',
  transformIgnorePatterns: ['/node_modules/?!(react-navigation)'],
  setupFiles: [
    '<rootDir>/__mocks__/react-native-async-storage.mock.js',
    '<rootDir>/__setup__/jest-fetch-mock.setup.js',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};

module.exports = config;
