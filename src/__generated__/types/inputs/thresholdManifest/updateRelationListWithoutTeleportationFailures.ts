import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutTeleportationFailures = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutTeleportationFailures] }),
    }),
  });
