import { builder } from "src/builder";

export const UnfinishedSymphonyUpdateWithoutUnstableFrequency = builder.inputRef<any>("UnfinishedSymphonyUpdateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
  }),
});
