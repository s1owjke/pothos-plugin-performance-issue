import { builder } from "src/builder";

import { HyperlinkedUnicornCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornCreateRelationListWithoutRecursiveRecursions = builder
  .inputRef<any>("HyperlinkedUnicornCreateRelationListWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HyperlinkedUnicornWhereUnique] }),
      create: t.field({ type: [HyperlinkedUnicornCreateWithoutRecursiveRecursions] }),
    }),
  });
