import { builder } from "src/builder";

import { HypotheticalRevenueUpdateRelationWithoutTimeTravelLog } from "../hypotheticalRevenue/updateRelationWithoutTimeTravelLog";
import { ThresholdManifestUpdateRelationWithoutTimeTravelLog } from "../thresholdManifest/updateRelationWithoutTimeTravelLog";
import { VortexReportUpdateRelationWithoutTimeTravelLog } from "../vortexReport/updateRelationWithoutTimeTravelLog";

export const TimeTravelLogUpdateWithoutUnstableFrequency = builder.inputRef<any>("TimeTravelLogUpdateWithoutUnstableFrequency").implement({
  fields: (t) => ({
    createdAt: t.field({ type: "DateTime", required: false }),
    updatedAt: t.field({ type: "DateTime", required: false }),
    hypotheticalRevenue: t.field({
      type: HypotheticalRevenueUpdateRelationWithoutTimeTravelLog,
      required: false,
    }),
    thresholdManifest: t.field({
      type: ThresholdManifestUpdateRelationWithoutTimeTravelLog,
      required: false,
    }),
    vortexReport: t.field({
      type: VortexReportUpdateRelationWithoutTimeTravelLog,
      required: false,
    }),
  }),
});
