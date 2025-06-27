import { EventEmitter } from 'node:events';

import { vi } from 'vitest';

export class WebContentsMock extends EventEmitter {
  public send = vi.fn();

  public reload = vi.fn();
  public reloadIgnoringCache = vi.fn();

  public closeDevTools = vi.fn();
  public openDevTools = vi.fn();
}
