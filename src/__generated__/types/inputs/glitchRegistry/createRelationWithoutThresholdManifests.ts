import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationWithoutThresholdManifests = builder
  .inputRef<any>("GlitchRegistryCreateRelationWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutThresholdManifests }),
    }),
  });
