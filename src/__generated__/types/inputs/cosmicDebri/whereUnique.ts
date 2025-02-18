import { builder } from "src/builder";

export const CosmicDebriWhereUnique = builder.inputRef<any>("CosmicDebriWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
