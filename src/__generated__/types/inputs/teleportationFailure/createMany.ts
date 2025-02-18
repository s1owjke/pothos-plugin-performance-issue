import { builder } from "src/builder";

export const TeleportationFailureCreateMany = builder.inputRef<any>("TeleportationFailureCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    schrodingerUserId: t.field({ type: "ID", required: true }),
    vortexReportId: t.field({ type: "ID", required: true }),
  }),
});
