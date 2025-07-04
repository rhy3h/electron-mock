import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

export class ContextBridgeMock extends EventEmitter {
  public exposeInMainWorld = vi.fn();
}
