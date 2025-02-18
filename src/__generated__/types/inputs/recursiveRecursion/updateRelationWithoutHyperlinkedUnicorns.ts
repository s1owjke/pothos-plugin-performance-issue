import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutHyperlinkedUnicorns } from "./createWithoutHyperlinkedUnicorns";
import { RecursiveRecursionUpdateWithoutHyperlinkedUnicorns } from "./updateWithoutHyperlinkedUnicorns";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionUpdateRelationWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("RecursiveRecursionUpdateRelationWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RecursiveRecursionWhereUnique }),
      disconnect: t.field({ type: RecursiveRecursionWhereUnique }),
      create: t.field({ type: RecursiveRecursionCreateWithoutHyperlinkedUnicorns }),
      update: t.field({ type: RecursiveRecursionUpdateWithoutHyperlinkedUnicorns }),
    }),
  });
