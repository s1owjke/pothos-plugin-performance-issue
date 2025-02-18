import { builder } from "src/builder";

export const JsonUpdate = builder.inputRef("JsonUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "Json", required: false }),
  }),
});
