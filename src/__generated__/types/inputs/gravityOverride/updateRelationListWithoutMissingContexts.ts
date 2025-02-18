import { builder } from "src/builder";

import { GravityOverrideCreateWithoutMissingContexts } from "./createWithoutMissingContexts";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutMissingContexts = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutMissingContexts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutMissingContexts] }),
    }),
  });
