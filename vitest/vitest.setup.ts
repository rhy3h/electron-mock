import { vi, expect } from 'vitest';

import { electronVitestMock } from './mocks/electron';

import { IpcMainInvokeEventMock } from './mocks/IpcMainInvokeEventMock';

interface HandlerListener {
  (event: IpcMainInvokeEventMock, ...args: any[]): Promise<any> | any;
}

const handleMap = new Map<string, HandlerListener>();

export function setupIpcMainHandleMock() {
  vi.mock('electron', () => electronVitestMock);

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

export function resetIpcHandleMock() {
  handleMap.clear();
  vi.restoreAllMocks();
}
