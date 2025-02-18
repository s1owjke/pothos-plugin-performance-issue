import { builder } from "src/builder";

import { GhostRecordCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("GhostRecordCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GhostRecordWhereUnique }),
      create: t.field({ type: GhostRecordCreateWithoutThresholdManifest }),
    }),
  });
