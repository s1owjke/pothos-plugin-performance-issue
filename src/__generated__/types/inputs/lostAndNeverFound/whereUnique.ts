import { builder } from "src/builder";

export const LostAndNeverFoundWhereUnique = builder.inputRef<any>("LostAndNeverFoundWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    schrodingerUserId: t.field({ type: "ID", required: false }),
  }),
});
