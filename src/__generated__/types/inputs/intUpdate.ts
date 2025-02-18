import { builder } from "src/builder";

export const IntUpdate = builder.inputRef("IntUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "Int", required: false }),
    increment: t.field({ type: "Int", required: false }),
    decrement: t.field({ type: "Int", required: false }),
    multiply: t.field({ type: "Int", required: false }),
    divide: t.field({ type: "Int", required: false }),
  }),
});
