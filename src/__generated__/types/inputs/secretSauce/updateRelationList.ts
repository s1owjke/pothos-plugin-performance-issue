import { builder } from "src/builder";

import { SecretSauceCreate } from "./create";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceUpdateRelationList = builder.inputRef<any>("SecretSauceUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [SecretSauceWhereUnique] }),
    set: t.field({ type: [SecretSauceWhereUnique] }),
    disconnect: t.field({ type: [SecretSauceWhereUnique] }),
    create: t.field({ type: [SecretSauceCreate] }),
  }),
});
