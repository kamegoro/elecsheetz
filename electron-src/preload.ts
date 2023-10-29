/* eslint-disable @typescript-eslint/no-namespace */
import { ipcRenderer, IpcRenderer } from 'electron';

declare global {
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer;
    }
  }
}

process.once('loaded', () => {
  global.ipcRenderer = ipcRenderer;
});
