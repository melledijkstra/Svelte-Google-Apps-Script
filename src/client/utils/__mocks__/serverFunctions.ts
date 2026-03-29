import type * as publicServerFunctions from '@/server/index';

////////////////////////////////////////////////////////////////
// This mock is used by storybook, to mimic server functions
////////////////////////////////////////////////////////////////

type ServerFunctionsInterface = typeof publicServerFunctions;

type Promisified<T> = {
  [K in keyof T]: T[K] extends (...args: infer A) => infer R
    ? (...args: A) => Promise<R>
    : Promise<T[K]>;
};

type PromisifiedServerFunctionsInterface = Promisified<ServerFunctionsInterface>;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

class ServerFunctions implements PromisifiedServerFunctionsInterface {
  async getSpreadsheetLocale(): Promise<string> {
    console.log('getSpreadsheetLocale mock called');
    await sleep(1000); // Simulate server delay
    return 'en-GB';
  }

  async onOpen(): Promise<void> {
    console.log('onOpen mock called');
  };

  async openAboutDialog(): Promise<void> {
    console.log('openAboutDialog mock called');
  };
}

export const serverFunctions = new ServerFunctions();