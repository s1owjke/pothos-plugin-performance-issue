import { builder } from "src/builder";

import { BananaQueueUpdateRelationListWithoutSingularityReport } from "../bananaQueue/updateRelationListWithoutSingularityReport";
import { EmotionalSupportTableUpdateRelationWithoutSingularityReport } from "../emotionalSupportTable/updateRelationWithoutSingularityReport";
import { GlitchRegistryUpdateRelationWithoutSingularityReport } from "../glitchRegistry/updateRelationWithoutSingularityReport";
import { InterdimensionalReceiptUpdateRelationListWithoutSingularityReport } from "../interdimensionalReceipt/updateRelationListWithoutSingularityReport";

export const SingularityReportUpdateWithoutAlternativeFact = builder.inputRef<any>("SingularityReportUpdateWithoutAlternativeFact").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    bananaQueues: t.field({
      type: BananaQueueUpdateRelationListWithoutSingularityReport,
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
