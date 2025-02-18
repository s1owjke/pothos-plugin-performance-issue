import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestUpdateRelationListWithoutUnnecessaryPermission = builder
  .inputRef<any>("ThresholdManifestUpdateRelationListWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      set: t.field({ type: [ThresholdManifestWhereUnique] }),
      disconnect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutUnnecessaryPermission] }),
    }),
  });
