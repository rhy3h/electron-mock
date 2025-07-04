import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

export class IpcRendererMock extends EventEmitter {
  public invoke = vi.fn();
}
