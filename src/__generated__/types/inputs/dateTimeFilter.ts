import { builder } from "src/builder";

export const DateTimeFilter = builder.inputRef("DateTimeFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "DateTime", required: false }),
    in: t.field({ type: ["DateTime"], required: { list: false, items: true } }),
    notIn: t.field({ type: ["DateTime"], required: { list: false, items: true } }),
    lt: t.field({ type: "DateTime", required: false }),
    lte: t.field({ type: "DateTime", required: false }),
    gt: t.field({ type: "DateTime", required: false }),
    gte: t.field({ type: "DateTime", required: false }),
    not: t.field({ type: DateTimeFilter, required: false }),
  }),
});
