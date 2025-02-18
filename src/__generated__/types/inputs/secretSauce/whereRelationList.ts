import { builder } from "src/builder";

import { SecretSauceWhere } from "./where";

export const SecretSauceWhereRelationList = builder.inputRef<any>("SecretSauceWhereRelationList").implement({
  fields: (t) => ({
    some: t.field({ type: SecretSauceWhere, required: false }),
    every: t.field({ type: SecretSauceWhere, required: false }),
    none: t.field({ type: SecretSauceWhere, required: false }),
  }),
});
