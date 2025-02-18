import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationWithoutUnnecessaryPermission = builder
  .inputRef<any>("ThresholdManifestCreateRelationWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutUnnecessaryPermission }),
    }),
  });
