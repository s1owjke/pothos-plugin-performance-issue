import { builder } from "src/builder";

import { SecretSauceCreate } from "./create";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceCreateRelation = builder.inputRef<any>("SecretSauceCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SecretSauceWhereUnique }),
    create: t.field({ type: SecretSauceCreate }),
  }),
});
