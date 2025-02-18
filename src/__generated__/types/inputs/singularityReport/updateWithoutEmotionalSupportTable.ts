import { builder } from "src/builder";

import { AlternativeFactUpdateRelationWithoutSingularityReport } from "../alternativeFact/updateRelationWithoutSingularityReport";
import { BananaQueueUpdateRelationListWithoutSingularityReport } from "../bananaQueue/updateRelationListWithoutSingularityReport";
import { GlitchRegistryUpdateRelationWithoutSingularityReport } from "../glitchRegistry/updateRelationWithoutSingularityReport";
import { InterdimensionalReceiptUpdateRelationListWithoutSingularityReport } from "../interdimensionalReceipt/updateRelationListWithoutSingularityReport";

export const SingularityReportUpdateWithoutEmotionalSupportTable = builder
  .inputRef<any>("SingularityReportUpdateWithoutEmotionalSupportTable")
  .implement({
    fields: (t) => ({
      createdAt: t.field({ type: "DateTime", required: false }),
      updatedAt: t.field({ type: "DateTime", required: false }),
      alternativeFact: t.field({
        type: AlternativeFactUpdateRelationWithoutSingularityReport,
        required: false,
      }),
      bananaQueues: t.field({
        type: BananaQueueUpdateRelationListWithoutSingularityReport,
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
