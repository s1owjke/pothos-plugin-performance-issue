import { builder } from "src/builder";

import { HypotheticalRevenueCreateRelationWithoutInfiniteUndo } from "../hypotheticalRevenue/createRelationWithoutInfiniteUndo";
import { ThresholdManifestCreateRelationWithoutInfiniteUndo } from "../thresholdManifest/createRelationWithoutInfiniteUndo";

export const InfiniteUndoCreateWithoutVortexReport = builder.inputRef<any>("InfiniteUndoCreateWithoutVortexReport").implement({
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
  }),
});
