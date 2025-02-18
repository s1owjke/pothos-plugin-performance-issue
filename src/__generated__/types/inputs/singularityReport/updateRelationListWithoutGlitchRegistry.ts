import { builder } from "src/builder";

import { SingularityReportCreateWithoutGlitchRegistry } from "./createWithoutGlitchRegistry";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelationListWithoutGlitchRegistry = builder
  .inputRef<any>("SingularityReportUpdateRelationListWithoutGlitchRegistry")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SingularityReportWhereUnique] }),
      set: t.field({ type: [SingularityReportWhereUnique] }),
      disconnect: t.field({ type: [SingularityReportWhereUnique] }),
      create: t.field({ type: [SingularityReportCreateWithoutGlitchRegistry] }),
    }),
  });
