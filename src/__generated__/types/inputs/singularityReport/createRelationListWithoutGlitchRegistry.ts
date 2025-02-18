import { builder } from "src/builder";

import { SingularityReportCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationListWithoutGlitchRegistry = builder
  .inputRef<any>("SingularityReportCreateRelationListWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutGlitchRegistry] }),
    }),
  });
