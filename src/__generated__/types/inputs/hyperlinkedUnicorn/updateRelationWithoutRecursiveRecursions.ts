import { builder } from "src/builder";

import { HyperlinkedUnicornCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { HyperlinkedUnicornUpdateWithoutRecursiveRecursions } from "./updateWithoutRecursiveRecursions";
import { HyperlinkedUnicornWhereUnique } from "./whereUnique";

export const HyperlinkedUnicornUpdateRelationWithoutRecursiveRecursions = builder
  .inputRef<any>("HyperlinkedUnicornUpdateRelationWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HyperlinkedUnicornWhereUnique }),
      disconnect: t.field({ type: HyperlinkedUnicornWhereUnique }),
      create: t.field({ type: HyperlinkedUnicornCreateWithoutRecursiveRecursions }),
      update: t.field({ type: HyperlinkedUnicornUpdateWithoutRecursiveRecursions }),
    }),
  });
