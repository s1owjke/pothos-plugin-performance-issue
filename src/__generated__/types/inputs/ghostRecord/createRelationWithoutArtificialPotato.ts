import { builder } from "src/builder";

import { GhostRecordCreateWithoutArtificialPotato } from "./createWithoutArtificialPotato";
import { GhostRecordWhereUnique } from "./whereUnique";

export const GhostRecordCreateRelationWithoutArtificialPotato = builder.inputRef<any>("GhostRecordCreateRelationWithoutArtificialPotato").implement({
  fields: (t) => ({
    connect: t.field({ type: GhostRecordWhereUnique }),
    create: t.field({ type: GhostRecordCreateWithoutArtificialPotato }),
  }),
});
