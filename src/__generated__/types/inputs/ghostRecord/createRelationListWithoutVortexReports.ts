import { builder } from "src/builder";

import { GhostRecordCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationListWithoutVortexReports = builder
  .inputRef<any>("GhostRecordCreateRelationListWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutVortexReports] }),
    }),
  });
