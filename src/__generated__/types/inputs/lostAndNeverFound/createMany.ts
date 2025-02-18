import { builder } from "src/builder";

export const LostAndNeverFoundCreateMany = builder.inputRef<any>("LostAndNeverFoundCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenueId: t.field({ type: "ID", required: true }),
    schrodingerUserId: t.field({ type: "ID", required: true }),
  }),
});
