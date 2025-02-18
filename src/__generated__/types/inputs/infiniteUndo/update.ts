import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutInfiniteUndo } from "../hypotheticalRevenue/updateRelationWithoutInfiniteUndo";
import { ThresholdManifestUpdateRelationWithoutInfiniteUndo } from "../thresholdManifest/updateRelationWithoutInfiniteUndo";
import { VortexReportUpdateRelationWithoutInfiniteUndo } from "../vortexReport/updateRelationWithoutInfiniteUndo";

export const InfiniteUndoUpdate = builder.inputRef<any>("InfiniteUndoUpdate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutInfiniteUndo,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutInfiniteUndo,
      required: false,
    }),
    vortexReport: t.field({ type: VortexReportUpdateRelationWithoutInfiniteUndo, required: false }),
  }),
});
