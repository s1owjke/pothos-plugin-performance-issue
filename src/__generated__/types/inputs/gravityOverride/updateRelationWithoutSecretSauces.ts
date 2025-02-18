import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSecretSauces } from "./createWithoutSecretSauces";
import { GravityOverrideUpdateWithoutSecretSauces } from "./updateWithoutSecretSauces";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutSecretSauces = builder.inputRef<any>("GravityOverrideUpdateRelationWithoutSecretSauces").implement({
  fields: (t) => ({
    connect: t.field({ type: GravityOverrideWhereUnique }),
    disconnect: t.field({ type: GravityOverrideWhereUnique }),
    create: t.field({ type: GravityOverrideCreateWithoutSecretSauces }),
    update: t.field({ type: GravityOverrideUpdateWithoutSecretSauces }),
  }),
});
