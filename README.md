# Electron Mock

[![npm](https://img.shields.io/npm/v/electron-mock.svg)](https://www.npmjs.com/package/electron-mock)

A lightweight utility for easily mocking Electron in tests.

## Vitest

```js
// vitest.setup.ts
import { beforeAll, beforeEach } from 'vitest';

import {
  mockElectron,
  mockIpcMainHandle,
  mockIpcRendererInvoke,
} from 'electron-mock/vitest';

beforeAll(() => {
  mockElectron();
  mockIpcMainHandle();
});

beforeEach(() => {
  mockIpcRendererInvoke();
});
```

```js
// electronIpcMain.test.ts
import { describe, expect, it, beforeAll, afterAll } from 'vitest';

import {
  GET_APP_VERSION
} from '@/electron/ipc/mainProcess/electronIPC';

import { ElectronIpcMain } from '@/electron/ipcMain/electronIpcMain';

import {
  electronVitestMock,
  getHandle,
  resetIpcHandleMock,
} from 'electron-mock/vitest';

const mockWindow = electronVitestMock.BrowserWindow;
const mockApp = electronVitestMock.app;
const mockIpcMainInvokeEvent = electronVitestMock.IpcMainInvokeEvent;

describe('ElectronIpcMain', () => {
  beforeAll(() => {
    new ElectronIpcMain(mockWindow as unknown as Electron.BrowserWindow);
  });

  afterAll(() => {
    resetIpcHandleMock();
  });

  it('GET_APP_VERSION', async () => {
    const handler = getHandle(GET_APP_VERSION);

    // Arrange
    mockApp.getVersion.mockReturnValue('1.0.0');

    // Act
    const result = await handler(mockIpcMainInvokeEvent);

    // Assert
    expect(result).toBe('1.0.0');
  });
});
```
