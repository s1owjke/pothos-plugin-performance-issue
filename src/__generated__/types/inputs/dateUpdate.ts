import { builder } from "src/builder";

export const DateUpdate = builder.inputRef("DateUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "Date", required: false }),
  }),
});
