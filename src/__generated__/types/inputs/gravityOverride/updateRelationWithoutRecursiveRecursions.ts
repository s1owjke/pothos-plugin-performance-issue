import { builder } from "src/builder";

import { GravityOverrideCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { GravityOverrideUpdateWithoutRecursiveRecursions } from "./updateWithoutRecursiveRecursions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutRecursiveRecursions = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutRecursiveRecursions }),
      update: t.field({ type: GravityOverrideUpdateWithoutRecursiveRecursions }),
    }),
  });
