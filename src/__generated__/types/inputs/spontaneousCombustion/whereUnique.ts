import { builder } from "src/builder";

export const SpontaneousCombustionWhereUnique = builder.inputRef<any>("SpontaneousCombustionWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: true }),
  }),
});
