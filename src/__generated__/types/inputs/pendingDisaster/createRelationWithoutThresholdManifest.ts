import { builder } from "src/builder";

import { PendingDisasterCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("PendingDisasterCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: PendingDisasterWhereUnique }),
      create: t.field({ type: PendingDisasterCreateWithoutThresholdManifest }),
    }),
  });
