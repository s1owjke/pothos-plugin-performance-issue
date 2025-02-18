import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ThresholdManifestUpdateWithoutGravityOverrides } from "./updateWithoutGravityOverrides";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutGravityOverrides = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutGravityOverrides }),
      update: t.field({ type: ThresholdManifestUpdateWithoutGravityOverrides }),
    }),
  });
