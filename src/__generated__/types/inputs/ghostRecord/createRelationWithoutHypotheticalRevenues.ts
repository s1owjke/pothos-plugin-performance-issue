import { builder } from "src/builder";

import { GhostRecordCreateWithoutHypotheticalRevenues } from "./createWithoutHypotheticalRevenues";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutHypotheticalRevenues = builder
  .inputRef<any>("GhostRecordCreateRelationWithoutHypotheticalRevenues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GhostRecordWhereUnique }),
      create: t.field({ type: GhostRecordCreateWithoutHypotheticalRevenues }),
    }),
  });
