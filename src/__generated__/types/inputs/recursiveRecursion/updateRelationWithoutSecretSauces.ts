import { builder } from "src/builder";

import { RecursiveRecursionCreateWithoutSecretSauces } from "./createWithoutSecretSauces";
import { RecursiveRecursionUpdateWithoutSecretSauces } from "./updateWithoutSecretSauces";
import { RecursiveRecursionWhereUnique } from "./whereUnique";

export const RecursiveRecursionUpdateRelationWithoutSecretSauces = builder
  .inputRef<any>("RecursiveRecursionUpdateRelationWithoutSecretSauces")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: RecursiveRecursionWhereUnique }),
      disconnect: t.field({ type: RecursiveRecursionWhereUnique }),
      create: t.field({ type: RecursiveRecursionCreateWithoutSecretSauces }),
      update: t.field({ type: RecursiveRecursionUpdateWithoutSecretSauces }),
    }),
  });
