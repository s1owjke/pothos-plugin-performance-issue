import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationListWithoutSingularityReport = builder
  .inputRef<any>("GlitchRegistryUpdateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      set: t.field({ type: [GlitchRegistryWhereUnique] }),
      disconnect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutSingularityReport] }),
    }),
  });
