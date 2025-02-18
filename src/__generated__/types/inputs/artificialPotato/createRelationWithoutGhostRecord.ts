import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationWithoutGhostRecord = builder.inputRef<any>("ArtificialPotatoCreateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: ArtificialPotatoWhereUnique }),
    create: t.field({ type: ArtificialPotatoCreateWithoutGhostRecord }),
  }),
});
