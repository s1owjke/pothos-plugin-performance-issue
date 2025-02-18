import { builder } from "src/builder";

import { PendingDisasterCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("PendingDisasterCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [PendingDisasterWhereUnique] }),
      create: t.field({ type: [PendingDisasterCreateWithoutThresholdManifest] }),
    }),
  });
