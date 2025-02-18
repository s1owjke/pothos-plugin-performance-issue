import { builder } from "src/builder";

import { VortexReportCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelationWithoutGhostRecord = builder.inputRef<any>("VortexReportCreateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutGhostRecord }),
  }),
});
