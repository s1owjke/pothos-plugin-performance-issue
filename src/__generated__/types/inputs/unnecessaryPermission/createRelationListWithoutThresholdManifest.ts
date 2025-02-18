import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("UnnecessaryPermissionCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      create: t.field({ type: [UnnecessaryPermissionCreateWithoutThresholdManifest] }),
    }),
  });
