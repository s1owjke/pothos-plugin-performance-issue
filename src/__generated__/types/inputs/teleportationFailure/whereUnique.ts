import { builder } from "src/builder";

export const TeleportationFailureWhereUnique = builder.inputRef<any>("TeleportationFailureWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    schrodingerUserId: t.field({ type: "ID", required: false }),
  }),
});
