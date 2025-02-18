import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("InfiniteUndoUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteUndoWhereUnique] }),
      set: t.field({ type: [InfiniteUndoWhereUnique] }),
      disconnect: t.field({ type: [InfiniteUndoWhereUnique] }),
      create: t.field({ type: [InfiniteUndoCreateWithoutThresholdManifest] }),
    }),
  });
