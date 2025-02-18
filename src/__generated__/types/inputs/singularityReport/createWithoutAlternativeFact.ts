import { builder } from "src/builder";

import { BananaQueueCreateRelationListWithoutSingularityReport } from "../bananaQueue/createRelationListWithoutSingularityReport";
import { EmotionalSupportTableCreateRelationWithoutSingularityReport } from "../emotionalSupportTable/createRelationWithoutSingularityReport";
import { GlitchRegistryCreateRelationWithoutSingularityReport } from "../glitchRegistry/createRelationWithoutSingularityReport";
import { InterdimensionalReceiptCreateRelationListWithoutSingularityReport } from "../interdimensionalReceipt/createRelationListWithoutSingularityReport";

export const SingularityReportCreateWithoutAlternativeFact = builder.inputRef<any>("SingularityReportCreateWithoutAlternativeFact").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    bananaQueues: t.field({
      type: BananaQueueCreateRelationListWithoutSingularityReport,
      required: false,
    }),
    emotionalSupportTable: t.field({
      type: EmotionalSupportTableCreateRelationWithoutSingularityReport,
      required: false,
    }),
    glitchRegistry: t.field({
      type: GlitchRegistryCreateRelationWithoutSingularityReport,
      required: false,
    }),
    interdimensionalReceipts: t.field({
      type: InterdimensionalReceiptCreateRelationListWithoutSingularityReport,
      required: false,
    }),
  }),
});
