import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutTeleportationFailures } from "./createWithoutTeleportationFailures";
import { ThresholdManifestUpdateWithoutTeleportationFailures } from "./updateWithoutTeleportationFailures";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutTeleportationFailures = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutTeleportationFailures")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutTeleportationFailures }),
      update: t.field({ type: ThresholdManifestUpdateWithoutTeleportationFailures }),
    }),
  });
