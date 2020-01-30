import got from 'got';
import Environment, { type EnvironmentName } from '@mixmaxhq/environment';
import SDC from '@mixmaxhq/statsd-client';

export default class ExampleModule {
  env: Environment;
  sdc: any;

  constructor({ environment }: { environment: EnvironmentName }) {
    this.env = new Environment({ raw: environment });
    this.sdc = new SDC(this.env.statsd('serviceAPIClient'));
  }

  /**
   * An example method to demonstrate how we generally expose functionality that depends on
   * application-bound state (e.g. the current environment) without requiring complex cross-linking
   * in the build process.
   *
   * @return A promise that returns a boolean representing whether the app service is reachable.
   *   As this is an example, it doesn't attempt to provide any diagnostic information.
   */
  async checkAppHealth() {
    try {
      await got(`${this.env.services.app}/health/elb`, {
        followRedirect: false,
        timeout: 5000,
        retry: 0,
      });
    } catch (err) {
      if (
        ['RequestError', 'HTTPError', 'UnsupportedProtocolError', 'TimeoutError'].includes(err.name)
      ) {
        return false;
      }
      throw err;
    }
    return true;
  }
}
