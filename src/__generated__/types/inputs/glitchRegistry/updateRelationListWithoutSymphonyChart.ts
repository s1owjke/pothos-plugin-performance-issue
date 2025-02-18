import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("GlitchRegistryUpdateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      set: t.field({ type: [GlitchRegistryWhereUnique] }),
      disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutSymphonyChart] }),
    }),
  });
