import { AppMock } from './AppMock';
import { BrowserWindowMock } from './BrowserWindowMock';
import { ContextBridgeMock } from './ContextBridgeMock';
import { IPCMainMock } from './IpcMainMock';
import { IpcMainInvokeEventMock } from './IpcMainInvokeEventMock';
import { IpcRendererMock } from './IpcRendererMock';

export const electronVitestMock = {
  app: new AppMock(),
  BrowserWindow: new BrowserWindowMock(),
  contextBridge: new ContextBridgeMock(),
  ipcMain: new IPCMainMock(),
  IpcMainInvokeEvent: new IpcMainInvokeEventMock(),
  ipcRenderer: new IpcRendererMock(),
};

export {
  AppMock,
  BrowserWindowMock,
  ContextBridgeMock,
  IPCMainMock,
  IpcMainInvokeEventMock,
  IpcRendererMock,
};
