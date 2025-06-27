import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

export class IPCMainMock extends EventEmitter {
  public handle = vi.fn();
}
