/**
 * Holds the environment specific configuration
 *
 * The list of which env maps to which file can be found in `angular.json`.
 */
export const environment = {
  // holds the current environment name
  current: 'development',

  // this sets the current log level
  loglevel: 'debug',

  // app meta information
  appInfo: {
    name: 'Application',
    version: '0.1.0',
    logo: 'assets/img/logo/logo.png',
    copyrightYear: '2018',
    copyrightHolder: 'Copyright',
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
