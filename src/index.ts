import winstonTransport from 'winston-transport';
import * as sentry from '@sentry/node';

export interface ISentryTransportOption extends winstonTransport.TransportStreamOptions {
  sentryConfig: sentry.NodeOptions;
}

export class SentryTransport extends winstonTransport {
  constructor(opts: ISentryTransportOption) {
    super(opts);
    const sentryConfig = Object.assign({}, opts.sentryConfig);
    sentry.init(sentryConfig);
  }
}

// tslint:disable-next-line:variable-name
export const Sentry = sentry;
