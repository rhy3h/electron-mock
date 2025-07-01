import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

export class AppMock extends EventEmitter {
  public isPackaged: boolean = true;

  public quit = vi.fn();
  public getVersion = vi.fn();
  public getPath = vi.fn();
}
