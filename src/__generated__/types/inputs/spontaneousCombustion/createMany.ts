import { builder } from "src/builder";

export const SpontaneousCombustionCreateMany = builder.inputRef<any>("SpontaneousCombustionCreateMany").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    gravityOverrideId: t.field({ type: "ID", required: false }),
    missingContextId: t.field({ type: "ID", required: false }),
    sentientMetadataId: t.field({ type: "ID", required: false }),
    symphonyChartId: t.field({ type: "String", required: false }),
  }),
});
