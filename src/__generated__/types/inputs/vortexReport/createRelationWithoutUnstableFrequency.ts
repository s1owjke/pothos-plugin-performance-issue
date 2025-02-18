import { builder } from "src/builder";

import { VortexReportCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("VortexReportCreateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutUnstableFrequency }),
    }),
  });
