import { builder } from "src/builder";

import { GravityOverrideCreateWithoutSecretSauces } from "./createWithoutSecretSauces";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutSecretSauces = builder.inputRef<any>("GravityOverrideCreateRelationWithoutSecretSauces").implement({
  fields: (t) => ({
    connect: t.field({ type: GravityOverrideWhereUnique }),
    create: t.field({ type: GravityOverrideCreateWithoutSecretSauces }),
  }),
});
