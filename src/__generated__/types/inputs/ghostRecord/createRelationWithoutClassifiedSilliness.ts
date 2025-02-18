import { builder } from "src/builder";

import { GhostRecordCreateWithoutClassifiedSilliness } from "./createWithoutClassifiedSilliness";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutClassifiedSilliness = builder
  .inputRef<any>("GhostRecordCreateRelationWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GhostRecordWhereUnique }),
      create: t.field({ type: GhostRecordCreateWithoutClassifiedSilliness }),
    }),
  });
