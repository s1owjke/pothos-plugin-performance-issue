import { builder } from "src/builder";

export const RedundantDuplicationUpdate = builder.inputRef<any>("RedundantDuplicationUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
  }),
});
