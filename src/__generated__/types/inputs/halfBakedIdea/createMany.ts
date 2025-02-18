import { builder } from "src/builder";

export const HalfBakedIdeaCreateMany = builder.inputRef<any>("HalfBakedIdeaCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    symphonyChartId: t.field({ type: "ID", required: true }),
    thresholdManifestId: t.field({ type: "ID", required: true }),
  }),
});
