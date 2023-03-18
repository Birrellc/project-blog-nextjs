import { buildLegacyTheme } from 'sanity';

const props = {
  white: '#fff',
  black: '#1a1a1a',
  orange: '#f7AB0A',
  red: '#db4437',
  yellow: '#f4b400',
  green: '#0f9d58',
};

export const myTheme = buildLegacyTheme({
  // base theme colors
  '--black': props['black'],
  '--white': props['white'],

  '--gray': '#f5f5f5',

  '--component-bg': props['black'],
  '--component-text-color': props['white'],

  //   brand
  '--brand-primary': props['orange'],

  // Default Button
  '--default-button-color': '--gray',
  '--default-button-primary-color': props['orange'],
  '--default-button-success-color': props['green'],
  '--default-button-warning-color': props['yellow'],
  '--default-button-danger-color': props['red'],

  // state colors
  '--state-info-color': props['orange'],
  '--state-success-color': props['green'],
  '--state-warning-color': props['yellow'],
  '--state-danger-color': props['red'],

  // Navbar

  '--main-navigation-color': props['black'],
  '--main-navigation-color--inverted': props['white'],

  '--focus-color': props['orange'],
});
