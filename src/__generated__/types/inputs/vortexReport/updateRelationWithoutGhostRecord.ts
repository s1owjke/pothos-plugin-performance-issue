import { builder } from "src/builder";

import { VortexReportCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { VortexReportUpdateWithoutGhostRecord } from "./updateWithoutGhostRecord";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelationWithoutGhostRecord = builder.inputRef<any>("VortexReportUpdateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    disconnect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreateWithoutGhostRecord }),
    update: t.field({ type: VortexReportUpdateWithoutGhostRecord }),
  }),
});
