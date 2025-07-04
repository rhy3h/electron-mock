import { AppMock } from './AppMock';
import { BrowserWindowMock } from './BrowserWindowMock';
import { ContextBridgeMock } from './ContextBridgeMock';
import { IpcMainMock } from './IpcMainMock';
import { IpcMainInvokeEventMock } from './IpcMainInvokeEventMock';
import { IpcRendererMock } from './IpcRendererMock';

export const electronVitestMock = {
  app: new AppMock(),
  BrowserWindow: new BrowserWindowMock(),
  contextBridge: new ContextBridgeMock(),
  ipcMain: new IpcMainMock(),
  IpcMainInvokeEvent: new IpcMainInvokeEventMock(),
  ipcRenderer: new IpcRendererMock(),
};

export {
  AppMock,
  BrowserWindowMock,
  ContextBridgeMock,
  IpcMainMock,
  IpcMainInvokeEventMock,
  IpcRendererMock,
};
