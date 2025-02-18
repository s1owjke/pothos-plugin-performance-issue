import { builder } from "src/builder";

export const DateTimeUpdate = builder.inputRef("DateTimeUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "DateTime", required: false }),
  }),
});
