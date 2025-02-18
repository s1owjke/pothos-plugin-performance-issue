import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutGravityOverrides] }),
    }),
  });
