import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

export class AppMock extends EventEmitter {
  public getVersion = vi.fn();
}
