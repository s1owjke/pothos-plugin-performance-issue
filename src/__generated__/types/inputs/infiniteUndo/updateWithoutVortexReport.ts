import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutInfiniteUndo } from "../hypotheticalRevenue/updateRelationWithoutInfiniteUndo";
import { ThresholdManifestUpdateRelationWithoutInfiniteUndo } from "../thresholdManifest/updateRelationWithoutInfiniteUndo";

export const InfiniteUndoUpdateWithoutVortexReport = builder.inputRef<any>("InfiniteUndoUpdateWithoutVortexReport").implement({
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
  }),
});
