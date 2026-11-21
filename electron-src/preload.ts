import { ipcRenderer, IpcRenderer } from 'electron';

type GlobalWithIpc = typeof globalThis & { ipcRenderer: IpcRenderer };

process.once('loaded', () => {
  (global as GlobalWithIpc).ipcRenderer = ipcRenderer;
});
