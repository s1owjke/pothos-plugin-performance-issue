import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutHyperlinkedUnicorns } from "./createWithoutHyperlinkedUnicorns";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionCreateRelationListWithoutHyperlinkedUnicorns = builder
  .inputRef<any>("RecursiveRecursionCreateRelationListWithoutHyperlinkedUnicorns")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      create: t.field({ type: [RecursiveRecursionCreateWithoutHyperlinkedUnicorns] }),
    }),
  });
