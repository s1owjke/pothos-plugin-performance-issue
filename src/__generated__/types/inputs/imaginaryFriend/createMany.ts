import { builder } from "src/builder";

export const ImaginaryFriendCreateMany = builder.inputRef<any>("ImaginaryFriendCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenueId: t.field({ type: "ID", required: true }),
    lostAndNeverFoundId: t.field({ type: "ID", required: false }),
    unassignedDestinyId: t.field({ type: "ID", required: false }),
    unstableFrequencyId: t.field({ type: "ID", required: false }),
    unstableFrequencyId2: t.field({ type: "ID", required: false }),
  }),
});
