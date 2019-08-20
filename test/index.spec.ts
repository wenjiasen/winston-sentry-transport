import winston from 'winston';
import { SentryTransport, Sentry } from '../src';
import assert from 'assert';

describe('Test Error', () => {
  it('logs error levels', () => {
    const error = new Error('Test Error!');
    const log = (info: any, next: () => void) => {
      const { level } = info;

      assert(error.message === info.message);
      if (level === 'error') {
        // Sentry.withScope((scope) => {
        //   Sentry.captureException(info);
        // });
      }
      next();
    };
    const DSN = 'https://21130e0099b442ff93dc9813745dd776@Your-Sentry-DSN/1';

    const logger = winston.createLogger({
      level: 'info',
      transports: [
        new SentryTransport({
          log,
          level: 'warn',
          sentryConfig: {
            dsn: DSN
          }
        })
      ]
    });
    logger.error(error);
  });
});
