/*
Copyright (c) Walmart Inc.

This source code is licensed under the Apache 2.0 license found in the
LICENSE file in the root directory of this source tree.
*/

import { MessageRef } from ".";

export interface IInputSource {
    start(): AsyncIterableIterator<MessageRef>;
    stop(): Promise<void>;
}
