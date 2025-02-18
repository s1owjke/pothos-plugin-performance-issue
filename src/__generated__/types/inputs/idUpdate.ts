import { builder } from "src/builder";

export const IdUpdate = builder.inputRef("IdUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "ID", required: false }),
  }),
});
