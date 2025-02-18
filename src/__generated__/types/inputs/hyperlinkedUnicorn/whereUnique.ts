import { builder } from "src/builder";

export const HyperlinkedUnicornWhereUnique = builder.inputRef<any>("HyperlinkedUnicornWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
