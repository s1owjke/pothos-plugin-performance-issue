import { builder } from "src/builder";

export const UnfinishedPrototypeCreateWithoutClassifiedSilliness = builder
  .inputRef<any>("UnfinishedPrototypeCreateWithoutClassifiedSilliness")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
    }),
  });
