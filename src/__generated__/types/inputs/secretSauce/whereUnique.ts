import { builder } from "src/builder";

export const SecretSauceWhereUnique = builder.inputRef<any>("SecretSauceWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
