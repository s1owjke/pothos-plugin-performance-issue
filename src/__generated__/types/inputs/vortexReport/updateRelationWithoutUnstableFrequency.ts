import { builder } from "src/builder";

import { VortexReportCreateWithoutUnstableFrequency } from "./createWithoutUnstableFrequency";
import { VortexReportUpdateWithoutUnstableFrequency } from "./updateWithoutUnstableFrequency";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutUnstableFrequency = builder
  .inputRef<any>("VortexReportUpdateRelationWithoutUnstableFrequency")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: VortexReportWhereUnique }),
      disconnect: t.field({ type: VortexReportWhereUnique }),
      create: t.field({ type: VortexReportCreateWithoutUnstableFrequency }),
      update: t.field({ type: VortexReportUpdateWithoutUnstableFrequency }),
    }),
  });
