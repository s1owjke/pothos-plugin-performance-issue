import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("InfiniteScrollLogUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      set: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      disconnect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      create: t.field({ type: [InfiniteScrollLogCreateWithoutThresholdManifest] }),
    }),
  });
