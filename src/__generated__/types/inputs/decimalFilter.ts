import { builder } from "src/builder";

export const DecimalFilter = builder.inputRef("DecimalFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "Decimal", required: false }),
    in: t.field({ type: ["Decimal"], required: { list: false, items: true } }),
    notIn: t.field({ type: ["Decimal"], required: { list: false, items: true } }),
    lt: t.field({ type: "Decimal", required: false }),
    lte: t.field({ type: "Decimal", required: false }),
    gt: t.field({ type: "Decimal", required: false }),
    gte: t.field({ type: "Decimal", required: false }),
    not: t.field({ type: DecimalFilter, required: false }),
  }),
});
