import { builder } from "src/builder";

import { AlternativeFactWhere } from "../alternativeFact/where";
import { BananaQueueWhereRelationList } from "../bananaQueue/whereRelationList";
import { DateTimeFilter } from "../dateTimeFilter";
import { EmotionalSupportTableWhere } from "../emotionalSupportTable/where";
import { GlitchRegistryWhere } from "../glitchRegistry/where";
import { IdFilter } from "../idFilter";
import { InterdimensionalReceiptWhereRelationList } from "../interdimensionalReceipt/whereRelationList";

export const SingularityReportWhere = builder.inputRef<any>("SingularityReportWhere").implement({
  fields: (t) => ({
    id: t.field({ type: IdFilter, required: false }),
    createdAt: t.field({ type: DateTimeFilter, required: false }),
    updatedAt: t.field({ type: DateTimeFilter, required: false }),
    alternativeFact: t.field({ type: AlternativeFactWhere, required: false }),
    bananaQueues: t.field({ type: BananaQueueWhereRelationList, required: false }),
    emotionalSupportTable: t.field({ type: EmotionalSupportTableWhere, required: false }),
    glitchRegistry: t.field({ type: GlitchRegistryWhere, required: false }),
    interdimensionalReceipts: t.field({
      type: InterdimensionalReceiptWhereRelationList,
      required: false,
    }),
    AND: t.field({ type: [SingularityReportWhere], required: false }),
    OR: t.field({ type: [SingularityReportWhere], required: false }),
    NOT: t.field({ type: [SingularityReportWhere], required: false }),
  }),
});
