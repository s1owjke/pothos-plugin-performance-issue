import { builder } from "src/builder";

import { GhostRecordCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("GhostRecordUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      set: t.field({ type: [GhostRecordWhereUnique] }),
      disconnect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutThresholdManifest] }),
    }),
  });
