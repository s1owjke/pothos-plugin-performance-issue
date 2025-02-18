import { builder } from "src/builder";

export const UnfinishedPrototypeWhereUnique = builder.inputRef<any>("UnfinishedPrototypeWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
