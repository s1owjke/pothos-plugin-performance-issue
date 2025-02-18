import { builder } from "src/builder";

import { HyperlinkedUnicornCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornUpdateRelationListWithoutRecursiveRecursions = builder
  .inputRef<any>("HyperlinkedUnicornUpdateRelationListWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
      set: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
      disconnect: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
      create: t.field({ type: [HyperlinkedUnicornCreateWithoutRecursiveRecursions] }),
    }),
  });
