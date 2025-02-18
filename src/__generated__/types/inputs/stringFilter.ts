import { builder } from "src/builder";

export const StringFilter = builder.inputRef("StringFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "String", required: false }),
    in: t.field({ type: ["String"], required: { list: false, items: true } }),
    notIn: t.field({ type: ["String"], required: { list: false, items: true } }),
    lt: t.field({ type: "String", required: false }),
    lte: t.field({ type: "String", required: false }),
    gt: t.field({ type: "String", required: false }),
    gte: t.field({ type: "String", required: false }),
    contains: t.field({ type: "String", required: false }),
    startsWith: t.field({ type: "String", required: false }),
    endsWith: t.field({ type: "String", required: false }),
    not: t.field({ type: StringFilter, required: false }),
  }),
});
