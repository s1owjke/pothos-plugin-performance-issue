import { builder } from "src/builder";

import { GravityOverrideCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GravityOverrideUpdateWithoutThresholdManifest } from "./updateWithoutThresholdManifest";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutThresholdManifest = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutThresholdManifest }),
      update: t.field({ type: GravityOverrideUpdateWithoutThresholdManifest }),
    }),
  });
