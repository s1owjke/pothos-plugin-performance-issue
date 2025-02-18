import { builder } from "src/builder";

import { GravityOverrideCreateWithoutThresholdManifest } from "./createWithoutThresholdManifest";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutThresholdManifest = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutThresholdManifest")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutThresholdManifest }),
    }),
  });
