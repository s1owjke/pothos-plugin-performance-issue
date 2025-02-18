import { builder } from "src/builder";

import { SecretSauceCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceUpdateRelationListWithoutRecursiveRecursions = builder
  .inputRef<any>("SecretSauceUpdateRelationListWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SecretSauceWhereUnique] }),
      set: t.field({ type: [SecretSauceWhereUnique] }),
      disconnect: t.field({ type: [SecretSauceWhereUnique] }),
      create: t.field({ type: [SecretSauceCreateWithoutRecursiveRecursions] }),
    }),
  });
