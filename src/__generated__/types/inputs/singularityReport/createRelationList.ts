import { builder } from "src/builder";

import { SingularityReportCreate } from "./create";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportCreateRelationList = builder.inputRef<any>("SingularityReportCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SingularityReportWhereUnique] }),
    create: t.field({ type: [SingularityReportCreate] }),
  }),
});
