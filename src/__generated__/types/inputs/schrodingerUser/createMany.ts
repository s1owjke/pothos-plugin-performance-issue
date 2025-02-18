import { builder } from "src/builder";

export const SchrodingerUserCreateMany = builder.inputRef<any>("SchrodingerUserCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    ghostRecordId: t.field({ type: "ID", required: false }),
  }),
});
