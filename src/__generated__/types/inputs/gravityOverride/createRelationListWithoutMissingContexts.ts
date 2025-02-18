import { builder } from "src/builder";

import { GravityOverrideCreateWithoutMissingContexts } from "./createWithoutMissingContexts";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutMissingContexts = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutMissingContexts")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutMissingContexts] }),
    }),
  });
