import { builder } from "src/builder";

export const UnfinishedPrototypeUpdateWithoutClassifiedSilliness = builder
  .inputRef<any>("UnfinishedPrototypeUpdateWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
    }),
  });
