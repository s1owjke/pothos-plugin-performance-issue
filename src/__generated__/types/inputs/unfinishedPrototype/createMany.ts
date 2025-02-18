import { builder } from "src/builder";

export const UnfinishedPrototypeCreateMany = builder.inputRef<any>("UnfinishedPrototypeCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    classifiedSillinessId: t.field({ type: "ID", required: true }),
  }),
});
