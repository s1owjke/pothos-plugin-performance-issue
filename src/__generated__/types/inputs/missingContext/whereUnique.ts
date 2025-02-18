import { builder } from "src/builder";

export const MissingContextWhereUnique = builder.inputRef<any>("MissingContextWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
