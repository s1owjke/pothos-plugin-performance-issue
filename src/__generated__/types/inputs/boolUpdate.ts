import { builder } from "src/builder";

export const BoolUpdate = builder.inputRef("BoolUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "Boolean", required: false }),
  }),
});
