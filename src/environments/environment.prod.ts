/**
 * Holds the environment specific configuration
 *
 * The list of which env maps to which file can be found in `angular.json`.
 */
export const environment = {
  // holds the current environment name
  current: 'production',

  // this sets the current log level
  loglevel: 'warn',

  // app meta information
  appInfo: {
    name: 'Application',
    version: '0.1.0',
    logo: 'assets/img/logo/logo.png',
    copyrightYear: '2018',
    copyrightHolder: 'Copyright'
  }
};
