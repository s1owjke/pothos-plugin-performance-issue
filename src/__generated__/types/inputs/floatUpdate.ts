import { builder } from "src/builder";

export const FloatUpdate = builder.inputRef("FloatUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "Float", required: false }),
    increment: t.field({ type: "Float", required: false }),
    decrement: t.field({ type: "Float", required: false }),
    multiply: t.field({ type: "Float", required: false }),
    divide: t.field({ type: "Float", required: false }),
  }),
});
