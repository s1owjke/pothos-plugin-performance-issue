import { builder } from "src/builder";

import { SecretSauceCreate } from "./create";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceCreateRelationList = builder.inputRef<any>("SecretSauceCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SecretSauceWhereUnique] }),
    create: t.field({ type: [SecretSauceCreate] }),
  }),
});
