import { builder } from "src/builder";

export const RecursiveRecursionWhereUnique = builder.inputRef<any>("RecursiveRecursionWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
