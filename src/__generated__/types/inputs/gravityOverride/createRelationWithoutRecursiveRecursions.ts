import { builder } from "src/builder";

import { GravityOverrideCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutRecursiveRecursions = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutRecursiveRecursions }),
    }),
  });
