/**
 * Dependencies
 */
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

/**
 * Logging Module
 */
import * as log from 'loglevel';

/**
 * Log Message Interface
 */
export interface LogMessage {
  level: string;
  message: string;
  context?: any;
}

/**
 * Logging Service
 */
@Injectable()
export class LoggingService {

  /**
   * Constructor
   */
  constructor(
  ) {
    // Configuration of the logging service
    if (environment.loglevel !== undefined) {
      log.setLevel(environment.loglevel);
      this.log({
        level: 'DEBUG',
        message: `Set loglevel to ${environment.loglevel} based on the environment configuration.`,
        context: {
          loglevel: environment.loglevel
        }
      });
    }
  }

  /**
   * Log Method
   */
  public log(msg: LogMessage) {
    const level: string = msg.level.toUpperCase().toString();
    const rendered = `${level}: ${msg.message} [${JSON.stringify(msg.context)}]`;

    switch (level) {
      case 'TRACE': {
        log.trace(rendered);
        break;
      }
      case 'DEBUG': {
        log.debug(rendered);
        break;
      }
      case 'INFO': {
        log.info(rendered);
        break;
      }
      case 'WARNING': {
        log.warn(rendered);
        break;
      }
      case 'ERROR': {
        log.error(rendered);
        break;
      }
      case 'CRITICAL': {
        log.error(rendered);
        break;
      }
      default: {
        log.trace(rendered);
      }
    }
  }
}
