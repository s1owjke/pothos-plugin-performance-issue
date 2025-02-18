import { builder } from "src/builder";

export const GravityOverrideWhereUnique = builder.inputRef<any>("GravityOverrideWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    unassignedDestinyId: t.field({ type: "ID", required: false }),
  }),
});
