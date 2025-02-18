import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationListWithoutGhostRecord = builder
  .inputRef<any>("ArtificialPotatoCreateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutGhostRecord] }),
    }),
  });
