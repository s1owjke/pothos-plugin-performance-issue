import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutSecretSauces } from "./createWithoutSecretSauces";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionCreateRelationWithoutSecretSauces = builder
  .inputRef<any>("RecursiveRecursionCreateRelationWithoutSecretSauces")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RecursiveRecursionWhereUnique }),
      create: t.field({ type: RecursiveRecursionCreateWithoutSecretSauces }),
    }),
  });
