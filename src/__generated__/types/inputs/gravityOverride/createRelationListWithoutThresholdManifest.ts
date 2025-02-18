import { builder } from "src/builder";

import { GravityOverrideCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutThresholdManifest = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutThresholdManifest] }),
    }),
  });
