import { builder } from "src/builder";

import { UnfinishedPrototypeCreateWithoutClassifiedSilliness } from "./createWithoutClassifiedSilliness";
import { UnfinishedPrototypeUpdateWithoutClassifiedSilliness } from "./updateWithoutClassifiedSilliness";
import { UnfinishedPrototypeWhereUnique } from "./whereUnique";

export const UnfinishedPrototypeUpdateRelationWithoutClassifiedSilliness = builder
  .inputRef<any>("UnfinishedPrototypeUpdateRelationWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnfinishedPrototypeWhereUnique }),
      disconnect: t.field({ type: UnfinishedPrototypeWhereUnique }),
      create: t.field({ type: UnfinishedPrototypeCreateWithoutClassifiedSilliness }),
      update: t.field({ type: UnfinishedPrototypeUpdateWithoutClassifiedSilliness }),
    }),
  });
