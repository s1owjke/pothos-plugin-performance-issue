import { builder } from "src/builder";

import { GhostRecordCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { GhostRecordUpdateWithoutVortexReports } from "./updateWithoutVortexReports";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutVortexReports = builder.inputRef<any>("GhostRecordUpdateRelationWithoutVortexReports").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    disconnect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutVortexReports }),
    update: t.field({ type: GhostRecordUpdateWithoutVortexReports }),
  }),
});
