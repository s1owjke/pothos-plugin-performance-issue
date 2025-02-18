import { builder } from "src/builder";

import { SingularityReportCreate } from "./create";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelation = builder.inputRef<any>("SingularityReportCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SingularityReportWhereUnique }),
    create: t.field({ type: SingularityReportCreate }),
  }),
});
