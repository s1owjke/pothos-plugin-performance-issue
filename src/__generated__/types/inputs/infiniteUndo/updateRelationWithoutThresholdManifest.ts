import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { InfiniteUndoUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("InfiniteUndoUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteUndoWhereUnique }),
      disconnect: t.field({ type: InfiniteUndoWhereUnique }),
      create: t.field({ type: InfiniteUndoCreateWithoutThresholdManifest }),
      update: t.field({ type: InfiniteUndoUpdateWithoutThresholdManifest }),
    }),
  });
