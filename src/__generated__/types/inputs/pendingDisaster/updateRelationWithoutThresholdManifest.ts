import { builder } from "src/builder";

import { PendingDisasterCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { PendingDisasterUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("PendingDisasterUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PendingDisasterWhereUnique }),
      disconnect: t.field({ type: PendingDisasterWhereUnique }),
      create: t.field({ type: PendingDisasterCreateWithoutThresholdManifest }),
      update: t.field({ type: PendingDisasterUpdateWithoutThresholdManifest }),
    }),
  });
