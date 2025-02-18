import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutInvisibleTransaction } from "./createWithoutInvisibleTransaction";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationListWithoutInvisibleTransaction = builder
  .inputRef<any>("ArtificialPotatoCreateRelationListWithoutInvisibleTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [ArtificialPotatoWhereUnique] }),
      create: t.field({ type: [ArtificialPotatoCreateWithoutInvisibleTransaction] }),
    }),
  });
