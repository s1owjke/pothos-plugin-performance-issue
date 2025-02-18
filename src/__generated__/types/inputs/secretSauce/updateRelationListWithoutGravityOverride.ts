import { builder } from "src/builder";

import { SecretSauceCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("SecretSauceUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SecretSauceWhereUnique] }),
      set: t.field({ type: [SecretSauceWhereUnique] }),
      disconnect: t.field({ type: [SecretSauceWhereUnique] }),
      create: t.field({ type: [SecretSauceCreateWithoutGravityOverride] }),
    }),
  });
