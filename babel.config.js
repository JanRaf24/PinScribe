module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@assets': 'assets',
          '@screens': './src/screens',
          '@components': './src/components',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@navigations': './src/navigations',
          '@utils': './src/utils',
          '@services': './src/services',
        },
      },
    ],
  ],
};
