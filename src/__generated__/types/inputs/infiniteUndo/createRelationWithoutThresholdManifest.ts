import { builder } from "src/builder";

import { InfiniteUndoCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { InfiniteUndoWhereUnique } from "./whereUnique";

export const InfiniteUndoCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("InfiniteUndoCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteUndoWhereUnique }),
      create: t.field({ type: InfiniteUndoCreateWithoutThresholdManifest }),
    }),
  });
