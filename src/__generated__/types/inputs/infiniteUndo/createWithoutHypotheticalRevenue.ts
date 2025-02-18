import { builder } from "src/builder";

import { ThresholdManifestCreateRelationWithoutInfiniteUndo } from "../thresholdManifest/createRelationWithoutInfiniteUndo";
import { VortexReportCreateRelationWithoutInfiniteUndo } from "../vortexReport/createRelationWithoutInfiniteUndo";

export const InfiniteUndoCreateWithoutHypotheticalRevenue = builder.inputRef<any>("InfiniteUndoCreateWithoutHypotheticalRevenue").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: true }),
    updatedAt: t.field({ type: "DateTime", required: true }),
    thresholdManifest: t.field({
      type: ThresholdManifestCreateRelationWithoutInfiniteUndo,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportCreateRelationWithoutInfiniteUndo,
      required: false,
    }),
  }),
});
