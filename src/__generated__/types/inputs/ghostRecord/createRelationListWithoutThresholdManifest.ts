import { builder } from "src/builder";

import { GhostRecordCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("GhostRecordCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutThresholdManifest] }),
    }),
  });
