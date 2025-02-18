import { builder } from "src/builder";

export const RedundantDuplicationWhereUnique = builder.inputRef<any>("RedundantDuplicationWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
