import { builder } from "src/builder";

import { ThresholdManifestCreateWithoutUnnecessaryPermission } from "./createWithoutUnnecessaryPermission";
import { ThresholdManifestWhereUnique } from "./whereUnique";

export const ThresholdManifestCreateRelationListWithoutUnnecessaryPermission = builder
  .inputRef<any>("ThresholdManifestCreateRelationListWithoutUnnecessaryPermission")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ThresholdManifestWhereUnique] }),
      create: t.field({ type: [ThresholdManifestCreateWithoutUnnecessaryPermission] }),
    }),
  });
