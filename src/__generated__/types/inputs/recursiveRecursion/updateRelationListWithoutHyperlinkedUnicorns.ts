import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutHyperlinkedUnicorns } from "./createWithoutHyperlinkedUnicorns";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionUpdateRelationListWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("RecursiveRecursionUpdateRelationListWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      set: t.field({ type: [RecursiveRecursionWhereUnique] }),
      disconnect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      create: t.field({ type: [RecursiveRecursionCreateWithoutHyperlinkedUnicorns] }),
    }),
  });
