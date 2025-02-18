import { builder } from "src/builder";

export const UnstableFrequencyCreateMany = builder.inputRef<any>("UnstableFrequencyCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
