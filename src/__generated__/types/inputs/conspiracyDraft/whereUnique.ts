import { builder } from "src/builder";

export const ConspiracyDraftWhereUnique = builder.inputRef<any>("ConspiracyDraftWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
