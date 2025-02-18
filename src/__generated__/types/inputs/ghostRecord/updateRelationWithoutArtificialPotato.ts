import { builder } from "src/builder";

import { GhostRecordCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { GhostRecordUpdateWithoutArtificialPotato } from "./updateWithoutArtificialPotato";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordUpdateRelationWithoutArtificialPotato = builder.inputRef<any>("GhostRecordUpdateRelationWithoutArtificialPotato").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    disconnect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutArtificialPotato }),
    update: t.field({ type: GhostRecordUpdateWithoutArtificialPotato }),
  }),
});
