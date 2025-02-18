import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSecretSauces } from "./createWithoutSecretSauces";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutSecretSauces = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutSecretSauces")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutSecretSauces] }),
    }),
  });
