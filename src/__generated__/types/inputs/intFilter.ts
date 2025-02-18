import { builder } from "src/builder";

export const IntFilter = builder.inputRef("IntFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "Int", required: false }),
    in: t.field({ type: ["Int"], required: { list: false, items: true } }),
    notIn: t.field({ type: ["Int"], required: { list: false, items: true } }),
    lt: t.field({ type: "Int", required: false }),
    lte: t.field({ type: "Int", required: false }),
    gt: t.field({ type: "Int", required: false }),
    gte: t.field({ type: "Int", required: false }),
    not: t.field({ type: IntFilter, required: false }),
  }),
});
