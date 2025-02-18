import { builder } from "src/builder";

import { GhostRecordCreateWithoutHypotheticalRevenues } from "./createWithoutHypotheticalRevenues";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutHypotheticalRevenues = builder
  .inputRef<any>("GhostRecordUpdateRelationListWithoutHypotheticalRevenues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      set: t.field({ type: [GhostRecordWhereUnique] }),
      disconnect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutHypotheticalRevenues] }),
    }),
  });
