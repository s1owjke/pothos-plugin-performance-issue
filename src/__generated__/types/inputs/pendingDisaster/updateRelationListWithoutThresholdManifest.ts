import { builder } from "src/builder";

import { PendingDisasterCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("PendingDisasterUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PendingDisasterWhereUnique] }),
      set: t.field({ type: [PendingDisasterWhereUnique] }),
      disconnect: t.field({ type: [PendingDisasterWhereUnique] }),
      create: t.field({ type: [PendingDisasterCreateWithoutThresholdManifest] }),
    }),
  });
