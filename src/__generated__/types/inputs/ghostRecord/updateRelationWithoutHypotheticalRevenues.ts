import { builder } from "src/builder";

import { GhostRecordCreateWithoutHypotheticalRevenues } from "./createWithoutHypotheticalRevenues";
import { GhostRecordUpdateWithoutHypotheticalRevenues } from "./updateWithoutHypotheticalRevenues";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutHypotheticalRevenues = builder
  .inputRef<any>("GhostRecordUpdateRelationWithoutHypotheticalRevenues")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GhostRecordWhereUnique }),
      disconnect: t.field({ type: GhostRecordWhereUnique }),
      create: t.field({ type: GhostRecordCreateWithoutHypotheticalRevenues }),
      update: t.field({ type: GhostRecordUpdateWithoutHypotheticalRevenues }),
    }),
  });
