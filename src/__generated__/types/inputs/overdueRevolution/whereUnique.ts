import { builder } from "src/builder";

export const OverdueRevolutionWhereUnique = builder.inputRef<any>("OverdueRevolutionWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
