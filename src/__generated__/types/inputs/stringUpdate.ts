import { builder } from "src/builder";

export const StringUpdate = builder.inputRef("StringUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "String", required: false }),
  }),
});
