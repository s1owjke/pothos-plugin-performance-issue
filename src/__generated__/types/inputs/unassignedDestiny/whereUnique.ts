import { builder } from "src/builder";

export const UnassignedDestinyWhereUnique = builder.inputRef<any>("UnassignedDestinyWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
