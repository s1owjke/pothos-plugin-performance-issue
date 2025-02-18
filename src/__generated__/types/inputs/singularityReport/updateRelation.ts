import { builder } from "src/builder";

import { SingularityReportCreate } from "./create";
import { SingularityReportUpdate } from "./update";
import { SingularityReportWhereUnique } from "./whereUnique";

export const SingularityReportUpdateRelation = builder.inputRef<any>("SingularityReportUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SingularityReportWhereUnique }),
    disconnect: t.field({ type: SingularityReportWhereUnique }),
    create: t.field({ type: SingularityReportCreate }),
    update: t.field({ type: SingularityReportUpdate }),
  }),
});
