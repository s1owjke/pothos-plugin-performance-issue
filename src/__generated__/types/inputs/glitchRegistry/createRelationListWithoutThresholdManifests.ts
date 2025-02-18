import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutThresholdManifests } from "./createWithoutThresholdManifests";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationListWithoutThresholdManifests = builder
  .inputRef<any>("GlitchRegistryCreateRelationListWithoutThresholdManifests")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutThresholdManifests] }),
    }),
  });
