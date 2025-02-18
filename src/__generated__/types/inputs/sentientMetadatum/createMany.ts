import { builder } from "src/builder";

export const SentientMetadatumCreateMany = builder.inputRef<any>("SentientMetadatumCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverrideId: t.field({ type: "ID", required: true }),
  }),
});
