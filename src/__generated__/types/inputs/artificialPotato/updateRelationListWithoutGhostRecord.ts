import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationListWithoutGhostRecord = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      set: t.field({ type: [ArtificialPotatoWhereUnique] }),
      disconnect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutGhostRecord] }),
    }),
  });
