import { AppMock } from './AppMock';
import { BrowserWindowMock } from './BrowserWindowMock';
import { IPCMainMock } from './IpcMainMock';
import { IpcMainInvokeEventMock } from './IpcMainInvokeEventMock';

export const electronVitestMock = {
  app: new AppMock(),
  BrowserWindow: new BrowserWindowMock(),
  ipcMain: new IPCMainMock(),
  IpcMainInvokeEvent: new IpcMainInvokeEventMock(),
};
