import { builder } from "src/builder";

import { SecretSauceCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { SecretSauceUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceUpdateRelationWithoutGravityOverride = builder.inputRef<any>("SecretSauceUpdateRelationWithoutGravityOverride").implement({
  fields: (t) => ({
    connect: t.field({ type: SecretSauceWhereUnique }),
    disconnect: t.field({ type: SecretSauceWhereUnique }),
    create: t.field({ type: SecretSauceCreateWithoutGravityOverride }),
    update: t.field({ type: SecretSauceUpdateWithoutGravityOverride }),
  }),
});
