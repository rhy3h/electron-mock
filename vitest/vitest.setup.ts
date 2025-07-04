import { vi, expect } from 'vitest';

import { electronVitestMock } from './mocks/electron';

import { IpcMainInvokeEventMock } from './mocks/IpcMainInvokeEventMock';

export interface HandlerListener {
  (event: IpcMainInvokeEventMock, ...args: any[]): Promise<any> | any;
}

export const handleMap = new Map<string, HandlerListener>();

export function mockElectron() {
  vi.mock('electron', () => electronVitestMock);
}

export function mockIpcMainHandle() {
  vi.spyOn(electronVitestMock.ipcMain, 'handle').mockImplementation(
    (channel: string, listener: HandlerListener) => {
      handleMap.set(channel, listener);
    },
  );
}

export function getHandle(channel: string) {
  const handler = handleMap.get(channel);

  expect(handler).toBeDefined();

  return handler;
}

export function mockIpcRendererInvoke() {
  vi.spyOn(electronVitestMock.ipcRenderer, 'invoke').mockImplementation(
    (channel: string, ...args: any[]) => {
      const handler = getHandle(channel);

      if (!handler) {
        return;
      }

      return handler(electronVitestMock.IpcMainInvokeEvent, ...args);
    },
  );
}

export function resetIpcHandleMock() {
  handleMap.clear();
  vi.restoreAllMocks();
}
