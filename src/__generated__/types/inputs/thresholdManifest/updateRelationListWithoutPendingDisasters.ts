import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutPendingDisasters = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutPendingDisasters] }),
    }),
  });
