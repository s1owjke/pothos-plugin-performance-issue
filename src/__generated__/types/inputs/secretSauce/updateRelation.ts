import { builder } from "src/builder";

import { SecretSauceCreate } from "./create";
import { SecretSauceUpdate } from "./update";
import { SecretSauceWhereUnique } from "./whereUnique";

export const SecretSauceUpdateRelation = builder.inputRef<any>("SecretSauceUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: SecretSauceWhereUnique }),
    disconnect: t.field({ type: SecretSauceWhereUnique }),
    create: t.field({ type: SecretSauceCreate }),
    update: t.field({ type: SecretSauceUpdate }),
  }),
});
