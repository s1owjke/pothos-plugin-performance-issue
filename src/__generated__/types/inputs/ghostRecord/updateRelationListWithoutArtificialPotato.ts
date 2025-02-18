import { builder } from "src/builder";

import { GhostRecordCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationListWithoutArtificialPotato = builder
  .inputRef<any>("GhostRecordUpdateRelationListWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      set: t.field({ type: [GhostRecordWhereUnique] }),
      disconnect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutArtificialPotato] }),
    }),
  });
