import { builder } from "src/builder";

import { ArtificialPotatoCreateWithoutInvisibleTransaction } from "./createWithoutInvisibleTransaction";
import { ArtificialPotatoUpdateWithoutInvisibleTransaction } from "./updateWithoutInvisibleTransaction";
import { ArtificialPotatoWhereUnique } from "./whereUnique";

export const ArtificialPotatoUpdateRelationWithoutInvisibleTransaction = builder
  .inputRef<any>("ArtificialPotatoUpdateRelationWithoutInvisibleTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: ArtificialPotatoWhereUnique }),
      disconnect: t.field({ type: ArtificialPotatoWhereUnique }),
      create: t.field({ type: ArtificialPotatoCreateWithoutInvisibleTransaction }),
      update: t.field({ type: ArtificialPotatoUpdateWithoutInvisibleTransaction }),
    }),
  });
