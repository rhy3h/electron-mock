import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

export class IpcMainMock extends EventEmitter {
  public handle = vi.fn();
}
