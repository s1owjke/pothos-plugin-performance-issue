import { builder } from "src/builder";

import { SingularityReportCreateWithoutAlternativeFact } from "./createWithoutAlternativeFact";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationWithoutAlternativeFact = builder
  .inputRef<any>("SingularityReportCreateRelationWithoutAlternativeFact")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SingularityReportWhereUnique }),
      create: t.field({ type: SingularityReportCreateWithoutAlternativeFact }),
    }),
  });
