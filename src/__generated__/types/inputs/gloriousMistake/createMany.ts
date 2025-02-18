import { builder } from "src/builder";

export const GloriousMistakeCreateMany = builder.inputRef<any>("GloriousMistakeCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    alternativeFactId: t.field({ type: "ID", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: true }),
  }),
});
