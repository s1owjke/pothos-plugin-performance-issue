import { builder } from "src/builder";

export const SymphonyChartWhereUnique = builder.inputRef<any>("SymphonyChartWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    ghostRecordId: t.field({ type: "ID", required: false }),
    schrodingerUserId: t.field({ type: "ID", required: false }),
  }),
});
