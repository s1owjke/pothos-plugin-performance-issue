import { builder } from "src/builder";

export const DecimalUpdate = builder.inputRef("DecimalUpdate").implement({
  fields: (t) => ({
    set: t.field({ type: "Decimal", required: false }),
    increment: t.field({ type: "Decimal", required: false }),
    decrement: t.field({ type: "Decimal", required: false }),
    multiply: t.field({ type: "Decimal", required: false }),
    divide: t.field({ type: "Decimal", required: false }),
  }),
});
