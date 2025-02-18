import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutInfiniteUndo } from "../hypotheticalRevenue/updateRelationWithoutInfiniteUndo";
import { VortexReportUpdateRelationWithoutInfiniteUndo } from "../vortexReport/updateRelationWithoutInfiniteUndo";

export const InfiniteUndoUpdateWithoutThresholdManifest = builder.inputRef<any>("InfiniteUndoUpdateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutInfiniteUndo,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutInfiniteUndo,
      required: false,
    }),
  }),
});
