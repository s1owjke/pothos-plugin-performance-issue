import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutInfiniteUndo } from "../hypotheticalRevenue/createRelationWithoutInfiniteUndo";
import { ThresholdManifestCreateRelationWithoutInfiniteUndo } from "../thresholdManifest/createRelationWithoutInfiniteUndo";
import { VortexReportCreateRelationWithoutInfiniteUndo } from "../vortexReport/createRelationWithoutInfiniteUndo";

export const InfiniteUndoCreate = builder.inputRef<any>("InfiniteUndoCreate").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutInfiniteUndo,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutInfiniteUndo,
      required: false,
    }),
    vortexReport: t.field({ type: VortexReportCreateRelationWithoutInfiniteUndo, required: false }),
  }),
});
