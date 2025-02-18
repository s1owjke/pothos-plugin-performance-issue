import { builder } from "src/builder";

import { SecretSauceCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { SecretSauceUpdateWithoutRecursiveRecursions } from "./updateWithoutRecursiveRecursions";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceUpdateRelationWithoutRecursiveRecursions = builder
  .inputRef<any>("SecretSauceUpdateRelationWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SecretSauceWhereUnique }),
      disconnect: t.field({ type: SecretSauceWhereUnique }),
      create: t.field({ type: SecretSauceCreateWithoutRecursiveRecursions }),
      update: t.field({ type: SecretSauceUpdateWithoutRecursiveRecursions }),
    }),
  });
