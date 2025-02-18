import { builder } from "src/builder";

export const RedundantDuplicationCreateMany = builder.inputRef<any>("RedundantDuplicationCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
