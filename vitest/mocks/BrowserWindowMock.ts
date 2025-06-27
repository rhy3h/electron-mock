import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

import { WebContentsMock } from './WebContentsMock';

export class BrowserWindowMock extends EventEmitter {
  public webContents = new WebContentsMock();

  public isMaximized = vi.fn();
  public minimize = vi.fn();
  public maximize = vi.fn();
  public unmaximize = vi.fn();
  public setFullScreen = vi.fn();
  public isFullScreen = vi.fn();
  public getSize = vi.fn();
  public setSize = vi.fn();
  public setMaximumSize = vi.fn();
}
