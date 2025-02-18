import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("UnnecessaryPermissionUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      set: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      disconnect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      create: t.field({ type: [UnnecessaryPermissionCreateWithoutThresholdManifest] }),
    }),
  });
