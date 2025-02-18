import { builder } from "src/builder";

export const UnfinishedSymphonyWhereUnique = builder.inputRef<any>("UnfinishedSymphonyWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
