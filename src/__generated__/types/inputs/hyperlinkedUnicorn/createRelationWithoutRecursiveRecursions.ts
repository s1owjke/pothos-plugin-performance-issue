import { builder } from "src/builder";

import { HyperlinkedUnicornCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornCreateRelationWithoutRecursiveRecursions = builder
  .inputRef<any>("HyperlinkedUnicornCreateRelationWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HyperlinkedUnicornWhereUnique }),
      create: t.field({ type: HyperlinkedUnicornCreateWithoutRecursiveRecursions }),
    }),
  });
