import { builder } from "src/builder";

export const FloatFilter = builder.inputRef("FloatFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "Float", required: false }),
    in: t.field({ type: ["Float"], required: { list: false, items: true } }),
    notIn: t.field({ type: ["Float"], required: { list: false, items: true } }),
    lt: t.field({ type: "Float", required: false }),
    lte: t.field({ type: "Float", required: false }),
    gt: t.field({ type: "Float", required: false }),
    gte: t.field({ type: "Float", required: false }),
    not: t.field({ type: FloatFilter, required: false }),
  }),
});
