import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

import { WebContentsMock } from './WebContentsMock';

export class BrowserWindowMock extends EventEmitter {
  public webContents = new WebContentsMock();

  public getSize = vi.fn();
  public setSize = vi.fn();
  public setMaximumSize = vi.fn();
}
