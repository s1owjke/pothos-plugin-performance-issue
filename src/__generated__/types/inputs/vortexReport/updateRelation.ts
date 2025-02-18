import { builder } from "src/builder";

import { VortexReportCreate } from "./create";
import { VortexReportUpdate } from "./update";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportUpdateRelation = builder.inputRef<any>("VortexReportUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    disconnect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreate }),
    update: t.field({ type: VortexReportUpdate }),
  }),
});
