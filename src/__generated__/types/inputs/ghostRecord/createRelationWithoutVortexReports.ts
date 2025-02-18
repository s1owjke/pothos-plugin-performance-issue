import { builder } from "src/builder";

import { GhostRecordCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutVortexReports = builder.inputRef<any>("GhostRecordCreateRelationWithoutVortexReports").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutVortexReports }),
  }),
});
