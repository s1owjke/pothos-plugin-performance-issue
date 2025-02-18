import { builder } from "src/builder";

export const DimensionalBackupWhereUnique = builder.inputRef<any>("DimensionalBackupWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    schrodingerUserId: t.field({ type: "ID", required: false }),
  }),
});
