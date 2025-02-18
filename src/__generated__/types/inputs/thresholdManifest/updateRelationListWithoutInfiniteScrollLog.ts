import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutInfiniteScrollLog } from "./createWithoutInfiniteScrollLog";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutInfiniteScrollLog = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutInfiniteScrollLog")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutInfiniteScrollLog] }),
    }),
  });
