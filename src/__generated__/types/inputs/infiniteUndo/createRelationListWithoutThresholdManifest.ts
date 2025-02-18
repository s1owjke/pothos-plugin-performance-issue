import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("InfiniteUndoCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteUndoWhereUnique] }),
      create: t.field({ type: [InfiniteUndoCreateWithoutThresholdManifest] }),
    }),
  });
