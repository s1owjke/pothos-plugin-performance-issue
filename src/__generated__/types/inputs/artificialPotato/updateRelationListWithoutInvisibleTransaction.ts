import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutInvisibleTransaction } from "./createWithoutInvisibleTransaction";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationListWithoutInvisibleTransaction = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationListWithoutInvisibleTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      set: t.field({ type: [ArtificialPotatoWhereUnique] }),
      disconnect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutInvisibleTransaction] }),
    }),
  });
