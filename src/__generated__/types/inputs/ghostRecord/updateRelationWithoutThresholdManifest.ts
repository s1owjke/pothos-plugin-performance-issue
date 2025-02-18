import { builder } from "src/builder";

import { GhostRecordCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GhostRecordUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("GhostRecordUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GhostRecordWhereUnique }),
      disconnect: t.field({ type: GhostRecordWhereUnique }),
      create: t.field({ type: GhostRecordCreateWithoutThresholdManifest }),
      update: t.field({ type: GhostRecordUpdateWithoutThresholdManifest }),
    }),
  });
