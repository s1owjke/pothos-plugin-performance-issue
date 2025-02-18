import { builder } from "src/builder";

export const BigIntFilter = builder.inputRef("BigIntFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "BigInt", required: false }),
    in: t.field({ type: ["BigInt"], required: { list: false, items: true } }),
    notIn: t.field({ type: ["BigInt"], required: { list: false, items: true } }),
    lt: t.field({ type: "BigInt", required: false }),
    lte: t.field({ type: "BigInt", required: false }),
    gt: t.field({ type: "BigInt", required: false }),
    gte: t.field({ type: "BigInt", required: false }),
    not: t.field({ type: BigIntFilter, required: false }),
  }),
});
