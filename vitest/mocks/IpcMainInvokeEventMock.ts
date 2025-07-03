import { EventEmitter } from 'node:events';

import { WebContentsMock } from './WebContentsMock';

export class IpcMainInvokeEventMock extends EventEmitter {
  public sender = new WebContentsMock();
}
