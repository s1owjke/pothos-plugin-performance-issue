import { builder } from "src/builder";

import { SingularityReportCreateWithoutAlternativeFact } from "./createWithoutAlternativeFact";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationListWithoutAlternativeFact = builder
  .inputRef<any>("SingularityReportCreateRelationListWithoutAlternativeFact")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutAlternativeFact] }),
    }),
  });
