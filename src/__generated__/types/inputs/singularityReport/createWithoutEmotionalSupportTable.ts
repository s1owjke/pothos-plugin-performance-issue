import { builder } from "src/builder";

import { AlternativeFactCreateRelationWithoutSingularityReport } from "../alternativeFact/createRelationWithoutSingularityReport";
import { BananaQueueCreateRelationListWithoutSingularityReport } from "../bananaQueue/createRelationListWithoutSingularityReport";
import { GlitchRegistryCreateRelationWithoutSingularityReport } from "../glitchRegistry/createRelationWithoutSingularityReport";
import { InterdimensionalReceiptCreateRelationListWithoutSingularityReport } from "../interdimensionalReceipt/createRelationListWithoutSingularityReport";

export const SingularityReportCreateWithoutEmotionalSupportTable = builder
  .inputRef<any>("SingularityReportCreateWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: true }),
      updatedAt: t.field({ type: "DateTime", required: true }),
      alternativeFact: t.field({
        type: AlternativeFactCreateRelationWithoutSingularityReport,
        required: false,
      }),
      bananaQueues: t.field({
        type: BananaQueueCreateRelationListWithoutSingularityReport,
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
