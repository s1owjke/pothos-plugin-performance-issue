import { builder } from "src/builder";

import { GravityOverrideCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutRecursiveRecursions = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutRecursiveRecursions] }),
    }),
  });
