import { builder } from "src/builder";

import { GravityOverrideCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutThresholdManifest] }),
    }),
  });
