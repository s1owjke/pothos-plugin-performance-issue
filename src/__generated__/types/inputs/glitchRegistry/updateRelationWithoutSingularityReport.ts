import { builder } from "src/builder";

import { GlitchRegistryCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { GlitchRegistryUpdateWithoutSingularityReport } from "./updateWithoutSingularityReport";
import { GlitchRegistryWhereUnique } from "./whereUnique";

export const GlitchRegistryUpdateRelationWithoutSingularityReport = builder
  .inputRef<any>("GlitchRegistryUpdateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GlitchRegistryWhereUnique }),
      disconnect: t.field({ type: GlitchRegistryWhereUnique }),
      create: t.field({ type: GlitchRegistryCreateWithoutSingularityReport }),
      update: t.field({ type: GlitchRegistryUpdateWithoutSingularityReport }),
    }),
  });
