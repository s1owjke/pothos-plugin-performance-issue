import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutSecretSauces } from "./createWithoutSecretSauces";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionUpdateRelationListWithoutSecretSauces = builder
  .inputRef<any>("RecursiveRecursionUpdateRelationListWithoutSecretSauces")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      set: t.field({ type: [RecursiveRecursionWhereUnique] }),
      disconnect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      create: t.field({ type: [RecursiveRecursionCreateWithoutSecretSauces] }),
    }),
  });
