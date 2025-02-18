import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("InfiniteScrollLogCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [InfiniteScrollLogWhereUnique] }),
      create: t.field({ type: [InfiniteScrollLogCreateWithoutThresholdManifest] }),
    }),
  });
