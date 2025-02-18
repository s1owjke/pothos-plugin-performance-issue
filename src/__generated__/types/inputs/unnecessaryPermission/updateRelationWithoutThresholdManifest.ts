import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { UnnecessaryPermissionUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("UnnecessaryPermissionUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnnecessaryPermissionWhereUnique }),
      disconnect: t.field({ type: UnnecessaryPermissionWhereUnique }),
      create: t.field({ type: UnnecessaryPermissionCreateWithoutThresholdManifest }),
      update: t.field({ type: UnnecessaryPermissionUpdateWithoutThresholdManifest }),
    }),
  });
