import { builder } from "src/builder";

export const BooleanFilter = builder.inputRef("BoolFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "Boolean", required: false }),
    not: t.field({ type: BooleanFilter, required: false }),
  }),
});
