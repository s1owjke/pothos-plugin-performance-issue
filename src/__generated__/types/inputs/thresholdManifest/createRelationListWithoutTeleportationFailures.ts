import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutTeleportationFailures = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutTeleportationFailures] }),
    }),
  });
