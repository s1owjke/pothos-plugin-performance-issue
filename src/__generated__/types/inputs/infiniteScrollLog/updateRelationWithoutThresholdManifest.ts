import { builder } from "src/builder";

import { InfiniteScrollLogCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { InfiniteScrollLogUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { InfiniteScrollLogWhereUnique } from "./whereUnique";

export const InfiniteScrollLogUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("InfiniteScrollLogUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: InfiniteScrollLogWhereUnique }),
      disconnect: t.field({ type: InfiniteScrollLogWhereUnique }),
      create: t.field({ type: InfiniteScrollLogCreateWithoutThresholdManifest }),
      update: t.field({ type: InfiniteScrollLogUpdateWithoutThresholdManifest }),
    }),
  });
