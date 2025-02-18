import { builder } from "src/builder";

import { AlternativeFactUpdateRelationWithoutSingularityReport } from "../alternativeFact/updateRelationWithoutSingularityReport";
import { EmotionalSupportTableUpdateRelationWithoutSingularityReport } from "../emotionalSupportTable/updateRelationWithoutSingularityReport";
import { GlitchRegistryUpdateRelationWithoutSingularityReport } from "../glitchRegistry/updateRelationWithoutSingularityReport";
import { InterdimensionalReceiptUpdateRelationListWithoutSingularityReport } from "../interdimensionalReceipt/updateRelationListWithoutSingularityReport";

export const SingularityReportUpdateWithoutBananaQueues = builder.inputRef<any>("SingularityReportUpdateWithoutBananaQueues").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    alternativeFact: t.field({
      type: AlternativeFactUpdateRelationWithoutSingularityReport,
      required: false,
    }),
    emotionalSupportTable: t.field({
      type: EmotionalSupportTableUpdateRelationWithoutSingularityReport,
      required: false,
    }),
    glitchRegistry: t.field({
      type: GlitchRegistryUpdateRelationWithoutSingularityReport,
      required: false,
    }),
    interdimensionalReceipts: t.field({
      type: InterdimensionalReceiptUpdateRelationListWithoutSingularityReport,
      required: false,
    }),
  }),
});
