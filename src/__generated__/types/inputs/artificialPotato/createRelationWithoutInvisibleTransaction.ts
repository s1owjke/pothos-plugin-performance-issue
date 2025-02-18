import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutInvisibleTransaction } from "./createWithoutInvisibleTransaction";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoCreateRelationWithoutInvisibleTransaction = builder
  .inputRef<any>("ArtificialPotatoCreateRelationWithoutInvisibleTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ArtificialPotatoWhereUnique }),
      create: t.field({ type: ArtificialPotatoCreateWithoutInvisibleTransaction }),
    }),
  });
