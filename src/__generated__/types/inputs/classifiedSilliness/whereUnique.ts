import { builder } from "src/builder";

export const ClassifiedSillinessWhereUnique = builder.inputRef<any>("ClassifiedSillinessWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    ghostRecordId: t.field({ type: "ID", required: false }),
  }),
});
