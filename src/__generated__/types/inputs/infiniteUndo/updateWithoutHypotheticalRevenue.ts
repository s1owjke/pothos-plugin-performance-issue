import { builder } from "src/builder";

import { ThresholdManifestUpdateRelationWithoutInfiniteUndo } from "../thresholdManifest/updateRelationWithoutInfiniteUndo";
import { VortexReportUpdateRelationWithoutInfiniteUndo } from "../vortexReport/updateRelationWithoutInfiniteUndo";

export const InfiniteUndoUpdateWithoutHypotheticalRevenue = builder.inputRef<any>("InfiniteUndoUpdateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutInfiniteUndo,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutInfiniteUndo,
      required: false,
    }),
  }),
});
