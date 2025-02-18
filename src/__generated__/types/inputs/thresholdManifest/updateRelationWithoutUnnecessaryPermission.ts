import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { ThresholdManifestUpdateWithoutUnnecessaryPermission } from "./updateWithoutUnnecessaryPermission";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationWithoutUnnecessaryPermission = builder
  .inputRef<any>("ThresholdManifestUpdateRelationWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ThresholdManifestWhereUnique }),
      disconnect: t.field({ type: ThresholdManifestWhereUnique }),
      create: t.field({ type: ThresholdManifestCreateWithoutUnnecessaryPermission }),
      update: t.field({ type: ThresholdManifestUpdateWithoutUnnecessaryPermission }),
    }),
  });
