import { builder } from "src/builder";

import { GhostRecordCreateWithoutClassifiedSilliness } from "./createWithoutClassifiedSilliness";
import { GhostRecordUpdateWithoutClassifiedSilliness } from "./updateWithoutClassifiedSilliness";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutClassifiedSilliness = builder
  .inputRef<any>("GhostRecordUpdateRelationWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GhostRecordWhereUnique }),
      disconnect: t.field({ type: GhostRecordWhereUnique }),
      create: t.field({ type: GhostRecordCreateWithoutClassifiedSilliness }),
      update: t.field({ type: GhostRecordUpdateWithoutClassifiedSilliness }),
    }),
  });
