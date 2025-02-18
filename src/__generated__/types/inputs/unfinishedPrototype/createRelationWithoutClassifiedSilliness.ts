import { builder } from "src/builder";

import { UnfinishedPrototypeCreateWithoutClassifiedSilliness } from "./createWithoutClassifiedSilliness";
import { UnfinishedPrototypeWhereUnique } from "./whereUnique";

export const UnfinishedPrototypeCreateRelationWithoutClassifiedSilliness = builder
  .inputRef<any>("UnfinishedPrototypeCreateRelationWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnfinishedPrototypeWhereUnique }),
      create: t.field({ type: UnfinishedPrototypeCreateWithoutClassifiedSilliness }),
    }),
  });
