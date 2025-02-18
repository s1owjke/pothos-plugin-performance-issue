import { builder } from "src/builder";

export const RejectedTheoryWhereUnique = builder.inputRef<any>("RejectedTheoryWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
