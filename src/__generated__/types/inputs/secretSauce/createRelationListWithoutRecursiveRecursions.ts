import { builder } from "src/builder";

import { SecretSauceCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceCreateRelationListWithoutRecursiveRecursions = builder
  .inputRef<any>("SecretSauceCreateRelationListWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SecretSauceWhereUnique] }),
      create: t.field({ type: [SecretSauceCreateWithoutRecursiveRecursions] }),
    }),
  });
