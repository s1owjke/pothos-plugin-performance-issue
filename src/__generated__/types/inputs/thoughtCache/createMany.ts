import { builder } from "src/builder";

export const ThoughtCacheCreateMany = builder.inputRef<any>("ThoughtCacheCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUserId: t.field({ type: "ID", required: true }),
    symphonyChartId: t.field({ type: "ID", required: true }),
  }),
});
