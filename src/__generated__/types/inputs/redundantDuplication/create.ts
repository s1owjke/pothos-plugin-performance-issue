import { builder } from "src/builder";

export const RedundantDuplicationCreate = builder.inputRef<any>("RedundantDuplicationCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
