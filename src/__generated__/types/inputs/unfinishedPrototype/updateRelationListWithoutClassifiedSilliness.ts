import { builder } from "src/builder";

import { UnfinishedPrototypeCreateWithoutClassifiedSilliness } from "./createWithoutClassifiedSilliness";
import { UnfinishedPrototypeWhereUnique } from "./whereUnique";

export const UnfinishedPrototypeUpdateRelationListWithoutClassifiedSilliness = builder
  .inputRef<any>("UnfinishedPrototypeUpdateRelationListWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnfinishedPrototypeWhereUnique] }),
      set: t.field({ type: [UnfinishedPrototypeWhereUnique] }),
      disconnect: t.field({ type: [UnfinishedPrototypeWhereUnique] }),
      create: t.field({ type: [UnfinishedPrototypeCreateWithoutClassifiedSilliness] }),
    }),
  });
