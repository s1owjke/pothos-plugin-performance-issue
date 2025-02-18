import { builder } from "src/builder";

import { SecretSauceCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceCreateRelationWithoutRecursiveRecursions = builder
  .inputRef<any>("SecretSauceCreateRelationWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SecretSauceWhereUnique }),
      create: t.field({ type: SecretSauceCreateWithoutRecursiveRecursions }),
    }),
  });
