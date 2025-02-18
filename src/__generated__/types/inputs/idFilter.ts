import { builder } from "src/builder";

export const IdFilter = builder.inputRef("IdFilter").implement({
  fields: (t) => ({
    equals: t.field({ type: "ID", required: false }),
    in: t.field({ type: ["ID"], required: { list: false, items: true } }),
    notIn: t.field({ type: ["ID"], required: { list: false, items: true } }),
    not: t.field({ type: IdFilter, required: false }),
  }),
});
