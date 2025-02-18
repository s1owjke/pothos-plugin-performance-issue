import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { ArtificialPotatoUpdateWithoutGhostRecord } from "./updateWithoutGhostRecord";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationWithoutGhostRecord = builder.inputRef<any>("ArtificialPotatoUpdateRelationWithoutGhostRecord").implement({
  fields: (t) => ({
    connect: t.field({ type: ArtificialPotatoWhereUnique }),
    disconnect: t.field({ type: ArtificialPotatoWhereUnique }),
    create: t.field({ type: ArtificialPotatoCreateWithoutGhostRecord }),
    update: t.field({ type: ArtificialPotatoUpdateWithoutGhostRecord }),
  }),
});
