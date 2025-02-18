import { builder } from "src/builder";

import { VortexReportCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationListWithoutUnstableFrequency = builder
  .inputRef<any>("VortexReportCreateRelationListWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [VortexReportWhereUnique] }),
      create: t.field({ type: [VortexReportCreateWithoutUnstableFrequency] }),
    }),
  });
