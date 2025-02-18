import { builder } from "src/builder";

export const DateFilter = builder.inputRef("DateFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "Date", required: false }),
    in: t.field({ type: ["Date"], required: { list: false, items: true } }),
    notIn: t.field({ type: ["Date"], required: { list: false, items: true } }),
    lt: t.field({ type: "Date", required: false }),
    lte: t.field({ type: "Date", required: false }),
    gt: t.field({ type: "Date", required: false }),
    gte: t.field({ type: "Date", required: false }),
    not: t.field({ type: DateFilter, required: false }),
  }),
});
