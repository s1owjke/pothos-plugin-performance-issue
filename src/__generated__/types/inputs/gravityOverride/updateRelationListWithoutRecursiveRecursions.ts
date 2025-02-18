import { builder } from "src/builder";

import { GravityOverrideCreateWithoutRecursiveRecursions } from "./createWithoutRecursiveRecursions";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutRecursiveRecursions = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutRecursiveRecursions")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutRecursiveRecursions] }),
    }),
  });
