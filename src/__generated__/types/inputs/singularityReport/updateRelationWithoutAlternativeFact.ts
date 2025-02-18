import { builder } from "src/builder";

import { SingularityReportCreateWithoutAlternativeFact } from "./createWithoutAlternativeFact";
import { SingularityReportUpdateWithoutAlternativeFact } from "./updateWithoutAlternativeFact";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationWithoutAlternativeFact = builder
  .inputRef<any>("SingularityReportUpdateRelationWithoutAlternativeFact")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SingularityReportWhereUnique }),
      disconnect: t.field({ type: SingularityReportWhereUnique }),
      create: t.field({ type: SingularityReportCreateWithoutAlternativeFact }),
      update: t.field({ type: SingularityReportUpdateWithoutAlternativeFact }),
    }),
  });
