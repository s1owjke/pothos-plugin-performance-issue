import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutGravityOverrides } from "./createWithoutGravityOverrides";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutGravityOverrides = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutGravityOverrides")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutGravityOverrides] }),
    }),
  });
