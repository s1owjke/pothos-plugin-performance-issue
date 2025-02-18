import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutInfiniteUndo } from "../hypotheticalRevenue/createRelationWithoutInfiniteUndo";
import { VortexReportCreateRelationWithoutInfiniteUndo } from "../vortexReport/createRelationWithoutInfiniteUndo";

export const InfiniteUndoCreateWithoutThresholdManifest = builder.inputRef<any>("InfiniteUndoCreateWithoutThresholdManifest").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueCreateRelationWithoutInfiniteUndo,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutInfiniteUndo,
      required: false,
    }),
  }),
});
