import { builder } from "src/builder";

export const SchrodingerUserWhereUnique = builder.inputRef<any>("SchrodingerUserWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    ghostRecordId: t.field({ type: "ID", required: false }),
  }),
});
