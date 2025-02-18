import { builder } from "src/builder";

import { GhostRecordCreateWithoutClassifiedSilliness } from "./createWithoutClassifiedSilliness";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutClassifiedSilliness = builder
  .inputRef<any>("GhostRecordUpdateRelationListWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      set: t.field({ type: [GhostRecordWhereUnique] }),
      disconnect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutClassifiedSilliness] }),
    }),
  });
