import { builder } from "src/builder";

import { GhostRecordCreateWithoutClassifiedSilliness } from "./createWithoutClassifiedSilliness";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationListWithoutClassifiedSilliness = builder
  .inputRef<any>("GhostRecordCreateRelationListWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutClassifiedSilliness] }),
    }),
  });
