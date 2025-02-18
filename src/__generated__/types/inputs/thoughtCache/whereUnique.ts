import { builder } from "src/builder";

export const ThoughtCacheWhereUnique = builder.inputRef<any>("ThoughtCacheWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
