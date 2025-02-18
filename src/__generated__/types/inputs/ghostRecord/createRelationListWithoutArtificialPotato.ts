import { builder } from "src/builder";

import { GhostRecordCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationListWithoutArtificialPotato = builder
  .inputRef<any>("GhostRecordCreateRelationListWithoutArtificialPotato")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GhostRecordWhereUnique] }),
      create: t.field({ type: [GhostRecordCreateWithoutArtificialPotato] }),
    }),
  });
