import { builder } from "src/builder";

import { VortexReportCreate } from "./create";
import { VortexReportWhereUnique } from "./whereUnique";

export const VortexReportCreateRelation = builder.inputRef<any>("VortexReportCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: VortexReportWhereUnique }),
    create: t.field({ type: VortexReportCreate }),
  }),
});
