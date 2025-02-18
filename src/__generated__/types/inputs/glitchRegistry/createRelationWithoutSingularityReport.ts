import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryCreateRelationWithoutSingularityReport = builder
  .inputRef<any>("GlitchRegistryCreateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutSingularityReport }),
    }),
  });
