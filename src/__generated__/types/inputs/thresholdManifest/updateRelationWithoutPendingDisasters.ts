import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { ThresholdManifestUpdateWithoutPendingDisasters } from "./updateWithoutPendingDisasters";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutPendingDisasters = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutPendingDisasters }),
      update: t.field({ type: ThresholdManifestUpdateWithoutPendingDisasters }),
    }),
  });
