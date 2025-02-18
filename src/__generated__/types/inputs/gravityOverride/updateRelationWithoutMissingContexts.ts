import { builder } from "src/builder";

import { GravityOverrideCreateWithoutMissingContexts } from "./createWithoutMissingContexts";
import { GravityOverrideUpdateWithoutMissingContexts } from "./updateWithoutMissingContexts";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutMissingContexts = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutMissingContexts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutMissingContexts }),
      update: t.field({ type: GravityOverrideUpdateWithoutMissingContexts }),
    }),
  });
