import { builder } from "src/builder";

export const GloriousMistakeWhereUnique = builder.inputRef<any>("GloriousMistakeWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
