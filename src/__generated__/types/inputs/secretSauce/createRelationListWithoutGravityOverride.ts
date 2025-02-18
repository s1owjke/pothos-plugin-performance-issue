import { builder } from "src/builder";

import { SecretSauceCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("SecretSauceCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SecretSauceWhereUnique] }),
      create: t.field({ type: [SecretSauceCreateWithoutGravityOverride] }),
    }),
  });
