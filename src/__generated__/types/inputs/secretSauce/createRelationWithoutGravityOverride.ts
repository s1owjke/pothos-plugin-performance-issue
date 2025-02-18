import { builder } from "src/builder";

import { SecretSauceCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceCreateRelationWithoutGravityOverride = builder.inputRef<any>("SecretSauceCreateRelationWithoutGravityOverride").implement({
  fields: (t) => ({
    connect: t.field({ type: SecretSauceWhereUnique }),
    create: t.field({ type: SecretSauceCreateWithoutGravityOverride }),
  }),
});
