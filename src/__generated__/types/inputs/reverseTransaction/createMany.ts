import { builder } from "src/builder";

export const ReverseTransactionCreateMany = builder.inputRef<any>("ReverseTransactionCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    imaginaryFriendId: t.field({ type: "ID", required: false }),
    unassignedDestinyId: t.field({ type: "ID", required: false }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
    unstableFrequencyId2: t.field({ type: "ID", required: false }),
    vortexReportId: t.field({ type: "ID", required: true }),
  }),
});
