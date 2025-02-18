import { builder } from "src/builder";

const HalfBakedIdeaCompoundSymphonyChartIdThresholdManifestId = builder
  .inputRef<any>("HalfBakedIdeaCompoundSymphonyChartIdThresholdManifestId")
  .implement({
    fields: (t) => ({
      symphonyChartId: t.field({ type: "ID", required: true }),
      thresholdManifestId: t.field({ type: "ID", required: true }),
    }),
  });

export const HalfBakedIdeaWhereUnique = builder.inputRef<any>("HalfBakedIdeaWhereUnique").implement({
  fields: (t) => ({
    id: t.field({ type: "ID", required: false }),
    symphonyChartId_thresholdManifestId: t.field({
      type: HalfBakedIdeaCompoundSymphonyChartIdThresholdManifestId,
      required: false,
    }),
  }),
});
