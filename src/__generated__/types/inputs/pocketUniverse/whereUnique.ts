import { builder } from "src/builder";

export const PocketUniverseWhereUnique = builder.inputRef<any>("PocketUniverseWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
