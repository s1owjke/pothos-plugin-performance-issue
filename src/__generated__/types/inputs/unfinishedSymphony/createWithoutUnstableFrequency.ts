import { builder } from "src/builder";

export const UnfinishedSymphonyCreateWithoutUnstableFrequency = builder.inputRef<any>("UnfinishedSymphonyCreateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
  }),
});
