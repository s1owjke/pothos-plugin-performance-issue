import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationListWithoutSingularityReport = builder
  .inputRef<any>("GlitchRegistryCreateRelationListWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GlitchRegistryWhereUnique] }),
      create: t.field({ type: [GlitchRegistryCreateWithoutSingularityReport] }),
    }),
  });
