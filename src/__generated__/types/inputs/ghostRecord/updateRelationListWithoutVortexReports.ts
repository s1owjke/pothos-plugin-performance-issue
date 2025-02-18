import { builder } from "src/builder";

import { GhostRecordCreateWithoutVortexReports } from "./createWithoutVortexReports";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutVortexReports = builder
  .inputRef<any>("GhostRecordUpdateRelationListWithoutVortexReports")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      set: t.field({ type: [GhostRecordWhereUnique] }),
      disconnect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutVortexReports] }),
    }),
  });
