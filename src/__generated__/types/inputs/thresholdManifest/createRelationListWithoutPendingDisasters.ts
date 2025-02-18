import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutPendingDisasters } from "./createWithoutPendingDisasters";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutPendingDisasters = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutPendingDisasters")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutPendingDisasters] }),
    }),
  });
