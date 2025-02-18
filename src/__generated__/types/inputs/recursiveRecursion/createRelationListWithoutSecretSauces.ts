import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutSecretSauces } from "./createWithoutSecretSauces";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionCreateRelationListWithoutSecretSauces = builder
  .inputRef<any>("RecursiveRecursionCreateRelationListWithoutSecretSauces")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [RecursiveRecursionWhereUnique] }),
      create: t.field({ type: [RecursiveRecursionCreateWithoutSecretSauces] }),
    }),
  });
