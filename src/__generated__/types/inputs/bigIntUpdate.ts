import { builder } from "src/builder";

export const BigIntUpdate = builder.inputRef("BigIntUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "BigInt", required: false }),
    increment: t.field({ type: "BigInt", required: false }),
    decrement: t.field({ type: "BigInt", required: false }),
    multiply: t.field({ type: "BigInt", required: false }),
    divide: t.field({ type: "BigInt", required: false }),
  }),
});
