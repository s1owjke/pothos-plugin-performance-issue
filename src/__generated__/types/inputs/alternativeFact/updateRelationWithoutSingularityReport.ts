import { builder } from "src/builder";

import { AlternativeFactCreateWithoutSingularityReport } from "./createWithoutSingularityReport";
import { AlternativeFactUpdateWithoutSingularityReport } from "./updateWithoutSingularityReport";
import { AlternativeFactWhereUnique } from "./whereUnique";

export const AlternativeFactUpdateRelationWithoutSingularityReport = builder
  .inputRef<any>("AlternativeFactUpdateRelationWithoutSingularityReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: AlternativeFactWhereUnique }),
      disconnect: t.field({ type: AlternativeFactWhereUnique }),
      create: t.field({ type: AlternativeFactCreateWithoutSingularityReport }),
      update: t.field({ type: AlternativeFactUpdateWithoutSingularityReport }),
    }),
  });
