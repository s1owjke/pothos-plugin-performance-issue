import { builder } from "src/builder";

import { GravityOverrideCreateWithoutMissingContexts } from "./createWithoutMissingContexts";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutMissingContexts = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutMissingContexts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutMissingContexts }),
    }),
  });
