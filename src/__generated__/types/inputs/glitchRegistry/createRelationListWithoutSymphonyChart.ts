import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutSymphonyChart } from "./createWithoutSymphonyChart";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationListWithoutSymphonyChart = builder
  .inputRef<any>("GlitchRegistryCreateRelationListWithoutSymphonyChart")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutSymphonyChart] }),
    }),
  });
